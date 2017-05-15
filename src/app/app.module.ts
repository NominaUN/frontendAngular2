//MODULOS DE ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { A2tUiModule } from 'angular2-token';
import { ChartsModule } from 'ng2-charts';

//MODULOS 
import { InicioModule } from './Components/inicio/inicio.module';
import { AppRoutingModule } from './app-routing.module';


//SERVICIOS
import { Angular2TokenService } from 'angular2-token';
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
import { LoggedInGuard } from './Services/authentication/logged-in-guard.service';


//COMPONENTES DE ROUTING Y ROOT
import { RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';



/////PORFAVOR NO AGREGAR COMPONENTES EN ESTA PARTE

@NgModule({
    declarations: [
        AppComponent,
        RoutingComponent
/////AGREGARLOS EN EL app-routing.module.ts
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InicioModule,
        AppRoutingModule,
        A2tUiModule,
		ChartsModule,
        
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
        AuthService,
        LoggedInGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
