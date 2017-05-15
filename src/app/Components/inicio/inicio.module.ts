import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from './demo-utils/module';
import { InicioComponent } from './inicio.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    DemoUtilsModule
  ],
  declarations: [
    InicioComponent
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule {}