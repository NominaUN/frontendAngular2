import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from './demo-utils/module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioRoutingModule } from './inicio-routing.module'
import { InicioComponent } from './inicio.component';
import { PushNotificationsModule } from 'angular2-notifications';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { EmployeesService } from  '../../Services/employees/employees.service';



@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    DemoUtilsModule,
    BrowserAnimationsModule,
    NgbModule,
    InicioRoutingModule,
    PushNotificationsModule,
    Ng2OrderModule
        
  ],
  declarations: [
    InicioComponent,
  ],
  exports: [
    InicioComponent,
    
  ],
  providers : [EmployeesService]
})
export class InicioModule {}