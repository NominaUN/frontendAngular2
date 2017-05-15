import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from './demo-utils/module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioRoutingModule } from './inicio-routing.module'
import { InicioComponent } from './inicio.component';


@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    DemoUtilsModule,
    BrowserAnimationsModule,
    NgbModule,
    InicioRoutingModule
        
  ],
  declarations: [
    InicioComponent
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule {}