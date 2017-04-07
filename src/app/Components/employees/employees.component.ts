import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EmployeesService } from  '../../Services/employees/employees.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  employees=[];
  constructor(private employeeService: EmployeesService) { }
  ngOnInit() {
   this.employeeService.getEmployees().subscribe(
     (resEmployeeData => this.employees = resEmployeeData));

  }
}

