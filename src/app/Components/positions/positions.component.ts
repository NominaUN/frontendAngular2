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

  ngOnInit() {
     this.positionService.getPositions().subscribe(
     (resPositionData => this.positions = resPositionData)
     );

    
  }
  
  onSelect(position:any):void {
  	console.log(position);
  }

}
