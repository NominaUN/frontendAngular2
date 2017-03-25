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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    ResetComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
