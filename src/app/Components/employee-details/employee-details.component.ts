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
	constructor (
		private employeesService : EmployeesService,
		private route: ActivatedRoute
	) { }

	ngOnInit():void {
		this.employeesService.getEmployeeById(this.route.snapshot.params['id'])
        .subscribe(
           resEmployee => {
               console.log('empleados', resEmployee.data)
               this.employee = resEmployee.data;
           },
           error => console.warn(`Error employee: ${error}`)
        );
	}

}
