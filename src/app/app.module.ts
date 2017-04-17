import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmployeesService } from './Services/employees/employees.service';
import { LiquidationsService } from './Services/liquidations/liquidations.service';
import { ParametersService } from './Services/parameters/parameters.service';
import { NovetiesService } from  './Services/noveties/noveties.service';
import { StatisticsService } from  './Services/statistics/statistics.service';

import { routingComponent, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, routingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ 
              EmployeesService,
              LiquidationsService,
              ParametersService,
              NovetiesService,
              StatisticsService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
