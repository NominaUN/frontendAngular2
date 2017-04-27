import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2TokenService, A2tUiModule } from 'angular2-token';


import { EmployeesService } from './Services/employees/employees.service';
import { LiquidationsService } from './Services/liquidations/liquidations.service';
import { ParametersService } from './Services/parameters/parameters.service';
import { NoveltiesService } from './Services/novelties/novelties.service';
import { StatisticsService } from './Services/statistics/statistics.service';
import { AreasService } from './Services/areas/areas.service';
import { ConceptsService } from './Services/concepts/concepts.service';
import { FondsService } from './Services/fonds/fonds.service';
import { GeneralParametersService } from './Services/general-parameters/general-parameters.service';
import { PositionsService } from './Services/positions/positions.service';
import { AuthService } from './Services/authentication/auth.service';

import { RoutingComponent, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



/////PORFAVOR NO AGREGAR COMPONENTES EN ESTA PARTE
/////AGREGARLOS EN EL app-routing.module.ts
@NgModule({
    declarations: [
        AppComponent,
        RoutingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        A2tUiModule
    ],
    providers: [
        EmployeesService,
        LiquidationsService,
        ParametersService,
        NoveltiesService,
        StatisticsService,
        AreasService,
        ConceptsService,
        FondsService,
        GeneralParametersService,
        PositionsService,
        Angular2TokenService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
