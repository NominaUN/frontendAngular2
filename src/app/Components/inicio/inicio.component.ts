import { Component, OnInit } from '@angular/core';
import { getMonth, startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek, endOfDay } from 'date-fns';
import { RRule } from 'rrule';
import { CalendarEvent } from 'angular-calendar';
import { colors } from './demo-utils/colors';

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
     var hoy = this.viewDate.getDate()+1; 

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

}

