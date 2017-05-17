import { Component, OnInit } from '@angular/core';
import { PositionsService } from  '../../Services/positions/positions.service';
import { Position } from '../../Models/position'


@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  position = new Position;

  constructor(private positionService: PositionsService) {}
  
  getPositions(){
	this.positionService.getPositions().subscribe(
		(resPositionData => this.positions = resPositionData)
    );
  }
  
  ngOnInit() {
    this.getPositions();   
    console.log(this.positions);
  }
  
  onSelect(position:any):void {
  	console.log(position);
  }

  createPositions(position: Position){
        this.positionService.setPositions(position)
            .subscribe(
            data => console.log('Success uploading the position', data),
            error => console.error(`Error: ${error}`), ()=>this.getPositions());
	
  }   

}
