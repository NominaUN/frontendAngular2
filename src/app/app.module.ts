import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmployeesService } from './Services/employees/employees.service';
import { LiquidationsService } from './Services/liquidations/liquidations.service';
import { ParametersService } from './Services/parameters/parameters.service';
import { NovetiesService } from  './Services/noveties/noveties.service';
import { StatisticsService } from  './Services/statistics/statistics.service';
import { AreasService } from './Services/areas/areas.service';
import { ConceptsService } from './Services/concepts/concepts.service';
import { FondsService } from './Services/fonds/fonds.service';
import { GeneralParametersService } from  './Services/general-parameters/general-parameters.service';
import { PositionsService } from  './Services/positions/positions.service';

import { RoutingComponent, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent, 
	RoutingComponent,
    EmployeeDetailsComponent
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
	StatisticsService,
	AreasService,
	ConceptsService,
	FondsService,
	GeneralParametersService,
	PositionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
