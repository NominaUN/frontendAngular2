import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeesService } from '../../Services/employees/employees.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AreasService } from '../../Services/areas/areas.service';
import { Area } from '../../Models/area';
import { PositionsService } from  '../../Services/positions/positions.service';
import { Position } from '../../Models/position'
import { FondsService } from  '../../Services/fonds/fonds.service';
import { Fond } from '../../Models/fond';
import { Router } from '@angular/router';

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
  areas: Area[];
  positions: Position[];
  fonds: any;
  arls: any;
  eps:any;
  cajaComps:any;
  epss:any;
  cesantias:any;
  pensiones:any;

  constructor (
    private employeesService : EmployeesService,
    private route: ActivatedRoute,
    private router: Router,
    private areaService: AreasService,
    private positionService: PositionsService,
    private fondService: FondsService
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

    this.loadAreas();
    this.getPositions();
    this.loadFonds();
  }

  loadAreas() {
      this.areaService.getAreas().subscribe(
          (resAreaData => this.areas = resAreaData)
      );
  }

  getPositions(){
    this.positionService.getPositions().subscribe(
    (resPositionData => this.positions = resPositionData)
    );
  }

  updateEmployee(employee: Employee) {
    this.employeesService.updateEmployee(employee)
    .subscribe(
      data => {
        console.log('Success uploading the employee', data);
        this.router.navigate(['/employees']);
      },
      error => console.error(`Error: ${error}`)
      )
  }
  loadFonds(){
    this.fondService.getFonds().subscribe(
      (resFondData => {
        this.fonds = resFondData;
        this.cajaComps = this.fonds.filter(fond => fond.fond_type == "CajaComp" );
        this.cesantias = this.fonds.filter(fond => fond.fond_type == "Cesantías" );
        this.pensiones = this.fonds.filter(fond => fond.fond_type == "Pensiones" );
        this.epss = this.fonds.filter(fond => fond.fond_type == "EPS" );
        this.arls = this.fonds.filter(fond => fond.fond_type == "ARL" );

        console.log(this.cajaComps,this.cesantias,this.pensiones,this.epss,this.arls);
      })
    );
  }

}
