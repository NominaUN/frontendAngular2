import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { CalendarEvent } from 'angular-calendar';
import { isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, format, subDays } from 'date-fns';
import { Observable } from 'rxjs/Observable';
import { colors } from './demo-utils/colors';
import { Employee } from '../../Models/resEmployeeData.model'
import { RRule } from 'rrule';
import { Subject } from 'rxjs/Subject';



interface Film {
  id: number;
  title: string;
  release_date: string;
}

interface EmployeeEvent extends CalendarEvent {
  employee: Employee;
}

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
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'inicio.component.html'
})
export class InicioComponent implements OnInit {

    calendarEvents: CalendarEvent[] = [
 
    {
    start: subDays(startOfDay(new Date()), 1),
   // end: addDays(new Date(), 1),
    title: 'A 3 day event',
    color: colors.red,
    cssClass: 'my-custom-class'
    }
   
];

  view: string = 'month';

  viewDate: Date = new Date();

  events$: Observable<EmployeeEvent[]>;

  activeDayIsOpen: boolean = false;

    refresh: Subject<any> = new Subject();

  constructor(private http: Http) {}

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
      bymonthday: -1
    }
}];

  ngOnInit(): void {
    this.fetchEvents();

  }

  fetchEvents(): void {
        this.updateCalendarEvents();


    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];


 this.events$ = this.http
      .get("src/app/Components/inicio/test.json")
      .map(res => res.json().data)
      .map((results : Employee[]) => {

        return results.map((employee: Employee) => {
          console.log("employee", new Date(employee.admission_date))
          return {
            title: employee.first_name,
            start: new Date(employee.admission_date+"T00:00:00"),
            color: colors.red,
            employee
          };
        });
      });


    console.log(this.events$)

    this.updateCalendarEvents()
    this.refresh.next()
  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

 updateCalendarEvents(): void {

    this.calendarEvents;

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


  

  /*
  eventClicked(event: EmployeeEvent): void {
    window.open(`https://www.themoviedb.org/movie/${event.film.id}`, '_blank');
  }
  */

}
