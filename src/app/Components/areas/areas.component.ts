import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { AreasService } from '../../Services/areas/areas.service';
import { Area } from '../../Models/area';
import { Observable } from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
//import { ErrorForeignKey } from './../shared/error-foreignkey.component'

@Component({
    selector: 'app-areas',
    templateUrl: './areas.component.html',
    styleUrls: ['./areas.component.css']
})


export class AreasComponent implements OnInit {


private _success = new Subject<string>();
successMessage: string;   

private _fail = new Subject<string>();
failMessage: string;


    
  @ViewChild('advertencia')
   modal: ModalComponent;



@Input('AreaPrueba') AreaPrueba : Area;

    areas: Area[];
    area = new Area;
    tempData = new Area;
    

    constructor(private areaService: AreasService) {
    }
    

    loadAreas() {
        this.areaService.getAreas().subscribe(
            (resAreaData => this.areas = resAreaData)
        );
    }

    ngOnInit() {
        this.loadAreas();
        
        this._success.subscribe((message) => this.successMessage = message);
        this._success.debounceTime(12000).subscribe(() => this.successMessage = null);

        this._fail.subscribe((message) => this.failMessage = message);
        this._fail.debounceTime(120000).subscribe(() => this.failMessage = null);
    }

    onSelect(): void {

        console.log("AreaPrueba", this.AreaPrueba)
     //   console.log("test")
        //this.onSelectedArea = area;
       // updateAreaModal.open()
    }

    guardarDatos(area){
        console.log("guardarDatos", area)
        this.tempData=area;

    }

 

    createArea(area: Area) {
        this.areaService.setAreas(area).subscribe(
            data => console.log(this._success.next('Area: ' +area.area_name + ', creada exitosamente!'), data),
            error => console.error(this._fail.next('Area no pudo ser creada '+ `Error: ${error}`)), ()=>this.loadAreas());
        
    }

    updateArea(name){
        console.log("Antes", this.tempData)
        this.tempData.area_name=name.area_name;
        console.log("Despues",this.tempData)
        this.areaService.updateArea(this.tempData).subscribe(
            data => console.log(this._success.next('Area editada exitosamente!'), data),
            error => console.error(this._fail.next('Area no pudo ser actualizada '+ `Error: ${error}`)), ()=>this.loadAreas());
    }
    deleteArea(area) {


        this.areaService.deleteArea(area.id)
        .subscribe(
            data => {this._success.next('Area: '+ area.area_name + ', eliminada exitosamente')},
            //error => {this.modal.open()},
            error => {this._fail.next('Esta area no puede borrarse mientras tenga empleados asociados a ella')},
             ()=>this.loadAreas()
        );
       
  }

  

}