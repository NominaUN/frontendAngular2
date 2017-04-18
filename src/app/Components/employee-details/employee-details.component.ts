import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeesService } from '../../Services/employees/employees.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
	employee:any; 
	myForm:FormGroup;
	constructor(
		private employeesService : EmployeesService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.employeesService.getEmployeeById(this.route.snapshot.params['id'])
            .subscribe(employee => {
            	this.employee = employee;
            	console.log('empleados', employee )
            });
	}
}