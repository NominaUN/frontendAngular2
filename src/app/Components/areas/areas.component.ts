import { Component, OnInit } from '@angular/core';
import { AreasService } from  '../../Services/areas/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  areas=[];

  constructor(private areaService: AreasService) {
  }
  
  loadAreas(){
	this.areaService.getAreas().subscribe(
		(resAreaData => this.areas = resAreaData)
    ); 
  }
  
  ngOnInit() {
    this.loadAreas();   
  }
  
  onSelect(area:any):void {
  	console.log(area);
  }

  onClick(event){
	var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
	if (value === "setArea") {
		var nombre = (<HTMLInputElement>document.getElementById("nameArea")).value;
		this.areaService.setAreas(nombre);
	}
	this.loadAreas();
  }
}
