import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { AreasService } from '../../Services/areas/areas.service';
import { Area } from '../../Models/area';
import { Observable } from 'rxjs/Rx';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
    selector: 'app-areas',
    templateUrl: './areas.component.html',
    styleUrls: ['./areas.component.css']
})


export class AreasComponent implements OnInit {



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
            data => console.log('Success uploading the area', data),
            error => console.error(`Error: ${error}`), ()=>this.loadAreas());
    }

    updateArea(name){
        console.log("Antes", this.tempData)
        this.tempData.area_name=name.area_name;
        console.log("Despues",this.tempData)
        this.areaService.updateArea(this.tempData).subscribe(
            data => console.log('Success uploading the area', data),
            error => console.error(`Error: ${error}`), ()=>this.loadAreas());

        

    }

}