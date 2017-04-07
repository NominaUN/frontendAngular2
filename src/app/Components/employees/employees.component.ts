import { Component, OnInit } from '@angular/core';
import { EmployeesService } from  '../../Services/employees/employees.service';
import { Observable } from 'rxjs/Rx';
import { Employee } from './employee.component';
import { employees } from './mock-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  //employees=[{"name": 'Diego'}];

  //employees = []
  employees = employees;

  selectedEmployee: Employee;
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  constructor(private employeeService: EmployeesService) { }

/*
  ngOnInit() {

   this.employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData);

  }
*/

ngOnInit() {}

}
