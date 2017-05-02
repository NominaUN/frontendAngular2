import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeesService } from '../../Services/employees/employees.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../../Models/resEmployeeData.model'


@Component({
	selector: 'app-employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
	employee= new Employee();
	myForm:FormGroup;
	constructor(
		private employeesService : EmployeesService,
		private route: ActivatedRoute
	) { }

	ngOnInit():void {
		this.employeesService.getEmployeeById(this.route.snapshot.params['id'])
            .subscribe(employee => {
            	console.log('empleados', employee )
            	this.eployeeToInterface(employee);
            });
	}

	private eployeeToInterface(employee:any):void {
	    this.employee.document_type = employee.document_type;
	    this.employee.document_number = employee.document_number;
	    this.employee.first_name = employee.first_name;
	    this.employee.other_name = employee.other_name;
	    this.employee.last_name = employee.last_name;
	    this.employee.second_surname = employee.second_surname;
	    this.employee.birthdate = employee.birthdate;
	    this.employee.birthplace = employee.birthplace;
	    this.employee.address = employee.address;
	    this.employee.phones = employee.phones;
	    this.employee.email = employee.email;
	    this.employee.admission_date = employee.admission_date;
	    this.employee.retirement_date = employee.retirement_date;
	    this.employee.salary = employee.salary;
	    this.employee.transport_aid = employee.transport_aid;
	    this.employee.integral_salary = employee.integral_salary;
	    this.employee.area = employee.area;
	    this.employee.position = employee.position;
	    this.employee.fond_employees = employee.fond_employees;
	    this.employee.fonds = employee.fonds;
	    this.employee.payday_details = employee.payday_details;
	    this.employee.vacations = employee.vacations;
	    this.employee.novelties = employee.novelties;
	    this.employee.users = employee.users;
	}
}
