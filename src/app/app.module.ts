import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ResetComponent } from './Components/reset/reset.component';
import { BarComponent } from './Components/bar/bar.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { NewsComponent } from './Components/news/news.component';
import { LiquidationsComponent } from './Components/liquidations/liquidations.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { ParametersComponent } from './Components/parameters/parameters.component';
import { EmployeesService } from './Services/employees.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    ResetComponent,
    BarComponent,
    EmployeesComponent,
    NewsComponent,
    LiquidationsComponent,
    StatisticsComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ appRoutingProviders, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
