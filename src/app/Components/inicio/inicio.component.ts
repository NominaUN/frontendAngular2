/*
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { CalendarEvent } from 'angular-calendar';
import { isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, format } from 'date-fns';
import { Observable } from 'rxjs/Observable';
import { colors } from './demo-utils/colors';
import { Employee } from '../../Models/resEmployeeData.model'


interface Film {
  id: number;
  title: string;
  release_date: string;
}

interface FilmEvent extends CalendarEvent {
  film: Film;
}

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'inicio.component.html'
})
export class InicioComponent implements OnInit {

  view: string = 'month';

  viewDate: Date = new Date();

  events$: Observable<FilmEvent[]>;

  activeDayIsOpen: boolean = false;

  constructor(private http: Http) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {

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

   // const search: URLSearchParams = new URLSearchParams();
   // search.set('primary_release_date.gte', format(getStart(this.viewDate), 'YYYY-MM-DD'));
   // search.set('primary_release_date.lte', format(getEnd(this.viewDate), 'YYYY-MM-DD'));
   // search.set('api_key', '0ec33936a68018857d727958dca1424f');
    this.events$ = this.http
      .get("http://localhost:3000/api/v1/employees?sort=-admission_date")
      .map(res => res.json().data)
      .map(({results}: {results: Employee[]}) => {
        return results.map((employee: Employee) => {
          return {
            title: film.title,
            start: new Date(film.release_date),
            color: colors.yellow,
            film
          };
        });
      });
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

  eventClicked(event: FilmEvent): void {
    window.open(`https://www.themoviedb.org/movie/${event.film.id}`, '_blank');
  }

}



*/

import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input  } from '@angular/core';
import { getDay, getMonth, startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek, endOfDay, subDays, addDays } from 'date-fns';
import { RRule } from 'rrule';
import { CalendarEvent } from 'angular-calendar';
import { colors } from './demo-utils/colors';
import { PushNotificationsService } from 'angular2-notifications';
import { EmployeesService } from '../../Services/employees/employees.service'
import { Employee } from '../../Models/resEmployeeData.model'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';  
import 'rxjs/Rx';


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
  styleUrls: ['inicio.component.css'],
//  changeDetection: ChangeDetectionStrategy.OnPush,
//  encapsulation: ViewEncapsulation.None
})
export class InicioComponent implements OnInit {

  constructor(
    private _pushNotifications: PushNotificationsService,
       private employeesService: EmployeesService){
        
           

         
       }


  view: string = 'month';

  tarea: string;

  viewDate: Date = new Date();

  quincena = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()+1, 0);
    refresh: Subject<any> = new Subject();

   

  test=[];
  test2=[];

  employees : Employee[];

  recurringEvents: RecurringEvent[] = [
    {
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


  calendarEvents: CalendarEvent[] = [

    ];


  getDiasQuincena() : number {
     var hoy = this.viewDate.getDate(); 

    if (hoy> 15){
        this.tarea= "FINAL de mes";
        return this.quincena.getDate()-hoy
    }
    else {
      this.tarea= "MITAD de mes";
      return 15-hoy
    }

  }




  ngOnInit(): void {
    this.request()
    this.create()
    

    //this.updateCalendarEvents()

    this.getEmployeesSorted()
  }

  updateCalendarEvents() {
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

   create(){

    this._pushNotifications.create('NominaUN', {body: 'Faltan '+this.getDiasQuincena()+" dias para la quincena de "+this.tarea , icon: '../favicon.ico'}).subscribe(
            res => console.log(res),
            err => console.log(err)
        )

  }


  request(){

    this._pushNotifications.requestPermission()
  }


  getEmployeesSorted(){
    

      
       this.employeesService.getEmployeesSorted()
   //       .map((x)=>{
     //       this.agregarContratos(x);
       //     this.test.push(x);
      //    })
          .subscribe(
            (x)=>{ this.agregarContratos(x);
                this.test.push(x);
                
                },
            ()=>{ },
            ()=>{this.updateCalendarEvents() },

  
          )
          
          
          

  }

    agregarContratos(data){

   
          this.recurringEvents.push(
            this.crearContrato(data.first_name, data.admission_date)
            )

            

            
     
    }

    crearContrato(nombre, fecha){


      var date = new Date(fecha);

      return {
          title: nombre,
          color: colors.yellow,
          rrule: {
            freq: RRule.YEARLY,
            bymonth: getMonth(date),
            bymonthday: getDay(date)
            }
          }   


    }

    
    testClick(){
      console.log(this.recurringEvents)

    }


  
}

