import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';


import { NgModule } from '@angular/core';

///Componentes///
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ResetComponent } from './Components/reset/reset.component';
import { BarComponent } from './Components/bar/bar.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeNewComponent } from './Components/employee-details/employee-new.component';
import { NoveltiesComponent } from './Components/novelties/novelties.component';
import { LiquidationsComponent } from './Components/liquidations/liquidations.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { ParametersComponent } from './Components/parameters/parameters.component';
import { AreasComponent } from './Components/areas/areas.component';
import { ConceptsComponent } from './Components/concepts/concepts.component';
import { FondsComponent } from './Components/fonds/fonds.component';
import { GeneralParametersComponent } from './Components/general-parameters/general-parameters.component';
import { PositionsComponent } from './Components/positions/positions.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AuthLinksComponent } from './Components/authentication/auth-links.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'reset', component: ResetComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'employee/:id', component: EmployeeDetailsComponent },
    { path: 'employeenew', component: EmployeeNewComponent },
    { path: 'novelties', component: NoveltiesComponent },
    { path: 'liquidations', component: LiquidationsComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'parameters', component: ParametersComponent },
    { path: 'areas', component: AreasComponent },
    { path: 'concepts', component: ConceptsComponent },
    { path: 'fonds', component: FondsComponent },
    { path: 'general-parameters', component: GeneralParametersComponent },
    { path: 'positions', component: PositionsComponent },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponent = [

    HomeComponent,
    AboutusComponent,
    ResetComponent,
    BarComponent,
    EmployeesComponent,
    NoveltiesComponent,
    LiquidationsComponent,
    StatisticsComponent,
    ParametersComponent,
    AreasComponent,
    ConceptsComponent,
    FondsComponent,
    GeneralParametersComponent,
    PositionsComponent,
    NotfoundComponent,
    EmployeeDetailsComponent,
    EmployeeNewComponent,
    AuthLinksComponent

]