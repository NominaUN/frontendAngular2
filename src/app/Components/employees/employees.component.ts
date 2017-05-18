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
    private employeesService: EmployeesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(
     (resEmployeeData => this.employees = resEmployeeData)
    );
  }

  onSelect(employee:any):void {
    let link = ['/employee', employee.id];
    this.router.navigate(link);
  }

  deleteEmployee(id:number):void{
    this.employeesService.delEmployee(id)
    .subscribe(
      data => {
        console.log('Success deleted the employee', data);
        this.ngOnInit();
      },
      error => console.error(`Error: ${error}`)
      )
  }

  createEmployee(){
    let link = ['/employeenew'];
    this.router.navigate(link);

  }

}

