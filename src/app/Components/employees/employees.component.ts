import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EmployeesService } from  '../../Services/employees/employees.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  employees=[];
  constructor(
    private employeeService: EmployeesService,
    private router: Router
  ) { }

  ngOnInit() {
   this.employeeService.getEmployees().subscribe(
     (resEmployeeData => this.employees = resEmployeeData));
  }

  onSelect(employee:any):void {
    let link = ['/employee', employee.id];
    this.router.navigate(link);
  }

  deleteEmployee(id:number):void{
     console.log(this.employeeService.delEmployee(id));
  }

  createEmployee(){
    let link = ['/employeenew'];
    this.router.navigate(link);
  }

}

