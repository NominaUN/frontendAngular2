import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EmployeesService } from  '../../Services/employees/employees.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private _success = new Subject<string>();
  successMessage: string;   

  private _fail = new Subject<string>();
  failMessage: string;
  
  employees=[];
  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getEmployees();
    
    this._success.subscribe((message) => this.successMessage = message);
    this._success.debounceTime(12000).subscribe(() => this.successMessage = null);

    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.debounceTime(120000).subscribe(() => this.failMessage = null);
  }

  getEmployees() {
    this.employeesService.getEmployees().subscribe(
     (resEmployeeData => this.employees = resEmployeeData.data)
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
        console.log(this._success.next('Empleado eliminado exitosamente!'), data);
        this.ngOnInit();
      },
      error => console.error(this._fail.next('Empleado no pudo ser eliminado '+ `Error: ${error}`))
      )
  }

  createEmployee(){
    let link = ['/employeenew'];
    this.router.navigate(link);

  }

}

