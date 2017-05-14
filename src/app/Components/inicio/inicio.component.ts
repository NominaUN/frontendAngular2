import { Component } from '@angular/core';




@Component({
  templateUrl: 'inicio.component.html',
  styleUrls: ['inicio.component.css', '../../../../node_modules/angular-calendar/dist/css/angular-calendar.css']
})
export class InicioComponent {


  viewDate: Date = new Date();
  events = [];

}