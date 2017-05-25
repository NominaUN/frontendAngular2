import { Component, OnInit, ViewChild } from '@angular/core';
import { PositionsService } from  '../../Services/positions/positions.service';
import { Position } from '../../Models/position'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  
  private _success = new Subject<string>();
  successMessage: string;   

  private _fail = new Subject<string>();
  failMessage: string;


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

    this._success.subscribe((message) => this.successMessage = message);
    this._success.debounceTime(12000).subscribe(() => this.successMessage = null);

    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.debounceTime(120000).subscribe(() => this.failMessage = null);
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
      data => console.log(this._success.next('Cargo: ' +position.position_name + ', creado exitosamente!'), data),
      error => console.error(this._fail.next('Cargo no pudo ser creado '+ `Error: ${error}`)), ()=>this.getPositions());

  } 
  updatePosition(position){
    this.tempData.position_name=position.position_name;
    console.log("Despues",this.tempData)
    this.positionService.updatePosition(this.tempData).subscribe(
      data => console.log(this._success.next('Cargo editado exitosamente!'), data),
      error => console.error(this._fail.next('Cargo no pudo ser actualizado '+ `Error: ${error}`)), ()=>this.getPositions());


  }

  deletePosition(position) {


    this.positionService.deletePosition(position.id)
    .subscribe(
      data => {this._success.next('Cargo: '+ position.position_name + ', eliminado exitosamente')},
      error => {this._fail.next('El cargo no pudo ser eliminado')},
      ()=>this.getPositions()
      );

  }


}
