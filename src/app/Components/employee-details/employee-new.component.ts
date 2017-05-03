import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeesService } from '../../Services/employees/employees.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../../Models/resEmployeeData.model'


@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeNewComponent implements OnInit {
  employee= new Employee();
  myForm:FormGroup;
  constructor(
    private employeesService : EmployeesService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit():void {
  }

  createEmployee(employee: Employee) {
    this.employeesService.setEmployee(employee)
    .subscribe(
      data => {
        console.log('Success uploading the employee', data);
        this.router.navigate(['/employees']);
      },
      error => console.error(`Error: ${error}`)
      )
  }

}
