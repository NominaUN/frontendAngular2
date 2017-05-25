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
  fond_CajaComp:number;//1
  fond_ARL:number;//2
  fond_Cesantias:number;//3
  fond_Pensiones:number;//4
  fond_eps:number;//5

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
    this.setFonds(); // set fonds in employe to be saved

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

  setFonds() {  
    this.employee.fonds[1] = this.searchFond(this.fond_CajaComp);//1
    this.employee.fonds[2] = this.searchFond(this.fond_ARL);//2
    this.employee.fonds[3] = this.searchFond(this.fond_Cesantias);//3
    this.employee.fonds[4] = this.searchFond(this.fond_Pensiones);//4
    this.employee.fonds[5] = this.searchFond(this.fond_eps);//5

    this.employee.fond_employees = this.employee.fond_employees || [];
    this.employee.fond_employees[1] = this.searchFond_employees(this.employee.id, this.employee.id, this.employee.fonds[1]);
    this.employee.fond_employees[2] = this.searchFond_employees(this.employee.id, this.employee.id, this.employee.fonds[2]);
    this.employee.fond_employees[3] = this.searchFond_employees(this.employee.id, this.employee.id, this.employee.fonds[3]);
    this.employee.fond_employees[4] = this.searchFond_employees(this.employee.id, this.employee.id, this.employee.fonds[4]);
    this.employee.fond_employees[5] = this.searchFond_employees(this.employee.id, this.employee.id, this.employee.fonds[5]);
  }

  searchFond_employees(id:number, employeeId:number, fondId:number,) {
    let obj = {id:id || 0 ,
            employee_id:employeeId || 0,
            fond_id:fondId || 0 
          };
    return obj;

  }

  private searchFond(fondId:number):any {
    let fondFound = this.fonds.find(fond => fond.id == fondId);
    return fondFound;
  }

  private searchArea(areaId:number):any {
    let areaFound = this.areas.find(area => area.id == areaId);
    return areaFound;
  }


}
