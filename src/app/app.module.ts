
//MODULOS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { A2tUiModule } from 'angular2-token';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


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


//COMPONENTES
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
        AppRoutingModule,
        A2tUiModule,
        Ng2Bs3ModalModule,
		ChartsModule
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
