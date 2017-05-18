import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EmployeesService } from  '../../Services/employees/employees.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'table-employees',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  employees=[];
  constructor(
    private employeesService: EmployeesService,
  ) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(
     (resEmployeeData => this.employees = resEmployeeData)
    );
  }



}

