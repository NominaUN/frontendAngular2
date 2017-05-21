import { Component, OnInit, ViewChild } from '@angular/core';
import { PositionsService } from  '../../Services/positions/positions.service';
import { Position } from '../../Models/position'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {


  @ViewChild('advertencia')
  modal: ModalComponent;


  positions: Position[];
  position = new Position;
  tempData = new Position;


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


  guardarDatos(position){
    this.tempData=position;

  }


  createPosition(position: Position){
    this.positionService.setPositions(position)
    .subscribe(
      data => console.log('Success uploading the position', data),
      error => console.error(`Error: ${error}`), ()=>this.getPositions());

  } 
  updatePosition(position){
    this.tempData.position_name=position.position_name;
    console.log("Despues",this.tempData)
    this.positionService.updatePosition(this.tempData).subscribe(
      data => console.log('Success uploading the area', data),
      error => console.error(`Error: ${error}`), ()=>this.getPositions());


  }

  deletePosition(position) {


    this.positionService.deletePosition(position.id)
    .subscribe(
      data => {},
      error => {this.modal.open()},
      ()=>this.getPositions()
      );

  }


}
