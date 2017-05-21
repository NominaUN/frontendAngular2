import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeesService } from '../../Services/employees/employees.service';
import { AreasService } from '../../Services/areas/areas.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeNewComponent implements OnInit {
  employee= new Employee();
  myForm:FormGroup;
  areas: Area[];
  positions: Position[];
  fonds: any;
  arls: any;
  epss:any;
  cajaComps:any;
  cesantias:any;
  pensiones:any;

  constructor(
    private employeesService : EmployeesService,
    private route: ActivatedRoute,
    private router: Router,
    private areaService: AreasService,
    private positionService: PositionsService,
    private fondService: FondsService
    ) { }

  ngOnInit():void {
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

  createEmployee(employee: Employee) {
    console.info("EMPLOYEE TO SAVE:", employee);
    employee.area = this.searchArea(employee.area_id);

    this.employeesService.setEmployee(employee)
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
        console.info('FONDOS-ALL', resFondData);
        this.fonds = resFondData;
        this.cajaComps = this.fonds.filter(fond => fond.fond_type == "CajaComp" );
        this.cesantias = this.fonds.filter(fond => fond.fond_type == "Cesantías" );
        this.pensiones = this.fonds.filter(fond => fond.fond_type == "Pensiones" );
        this.epss = this.fonds.filter(fond => fond.fond_type == "EPS" );
        this.arls = this.fonds.filter(fond => fond.fond_type == "ARL" );
        console.info('FONDOS', this.cajaComps,this.cesantias,this.pensiones,this.epss,this.arls);
      })
    );  
  }

  private searchArea(areaId:number):any {
    let areaFound = this.areas.find(area => area.id == areaId);
    return areaFound;
  }


}
