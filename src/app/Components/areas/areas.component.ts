﻿import { Component, OnInit } from '@angular/core';
import { AreasService } from '../../Services/areas/areas.service';
import { Area } from '../../Models/area';
import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'app-areas',
    templateUrl: './areas.component.html',
    styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

    areas: Area[];
    area = new Area;
    constructor(private areaService: AreasService) {
    }

    loadAreas() {
        this.areaService.getAreas().subscribe(
            (resAreaData => this.areas = resAreaData)
        );
    }

    ngOnInit() {

        this.loadAreas();
    //    let timer = Observable.timer(0, 5000);
    //    timer.subscribe(() => this.loadAreas());
    }

    onSelect(area: any): void {
        console.log(area);
    }

    createArea(area: Area) {
        this.areaService.setAreas(area)
            .subscribe(
            data => console.log('Success uploading the area', data),
            error => console.error(`Error: ${error}`), ()=>this.loadAreas());

    }
}
