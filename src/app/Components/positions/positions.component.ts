import { Component, OnInit } from '@angular/core';
import { PositionsService } from  '../../Services/positions/positions.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions=[];

  constructor(private positionService: PositionsService) {
  }
  
  loadPositions(){
	this.positionService.getPositions().subscribe(
		(resPositionData => this.positions = resPositionData)
    );
  }
  
  ngOnInit() {
    this.loadPositions();   
  }
  
  onSelect(position:any):void {
  	console.log(position);
  }

  onClick(event){
	var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
	if (value === "setPosition") {
		var nombre = (<HTMLInputElement>document.getElementById("namePosition")).value;
		this.positionService.setPositions(nombre);
		location.reload();
	}
  }   

}
