import { Component, OnInit } from '@angular/core';
import { getMonth, startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek, endOfDay } from 'date-fns';
import { RRule } from 'rrule';
import { CalendarEvent } from 'angular-calendar';
import { colors } from './demo-utils/colors';
import { PushNotificationsService } from 'angular2-notifications';


interface RecurringEvent {
  title: string;
  color: any;
  rrule?: {
    freq: RRule.Frequency,
    bymonth?: number,
    bymonthday?: number,
    byweekday?: RRule.Weekday[]
  };
}



@Component({
  templateUrl: 'inicio.component.html',
  styleUrls: ['inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _pushNotifications: PushNotificationsService ){


  }


  view: string = 'month';

  viewDate: Date = new Date();

  quincena = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()+1, 0);


  recurringEvents: RecurringEvent[] = [{
    title: 'Quincena mitad de Mes',
    color: colors.yellow,
    rrule: {
      freq: RRule.MONTHLY,
      bymonthday: 15
    }
  },
  {
    title: 'Quincena Final de Mes',
    color: colors.yellow,
    rrule: {
      freq: RRule.MONTHLY,
      bymonthday: this.quincena.getDate()
    }
  }];

  calendarEvents: CalendarEvent[] = [];


  getDiasQuincena() : number {
     var hoy = this.viewDate.getDate(); 

    if (hoy> 15){
        return this.quincena.getDate()-hoy
    }
    else {
      return 15-hoy
    }

  }

  ngOnInit(): void {
    this.updateCalendarEvents();
    console.log(this.getDiasQuincena());
    this.request()
    this.create()
  }

  updateCalendarEvents(): void {

    this.calendarEvents = [];

    const startOfPeriod: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    };

    const endOfPeriod: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    };

    this.recurringEvents.forEach(event => {

      const rule: RRule = new RRule(Object.assign({}, event.rrule, {
        dtstart: startOfPeriod[this.view](this.viewDate),
        until: endOfPeriod[this.view](this.viewDate)
      }));

      rule.all().forEach((date) => {
        this.calendarEvents.push(Object.assign({}, event, {
          start: new Date(date)
        }));
      });

    });

  }

   create(){

    this._pushNotifications.create('NominaUN', {body: 'Faltan '+this.getDiasQuincena()+" dias para la quincena !!" , icon: '../favicon.ico'}).subscribe(
            res => console.log(res),
            err => console.log(err)
        )

  }


  request(){

    this._pushNotifications.requestPermission()
  }

}

