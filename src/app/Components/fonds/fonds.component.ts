import { Component, OnInit, ViewChild } from '@angular/core';
import { FondsService } from  '../../Services/fonds/fonds.service';
import { Fond } from '../../Models/fond';
import { Observable } from 'rxjs/Rx';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {Subject} from 'rxjs/Subject';


@Component({
	selector: 'app-fonds',
	templateUrl: './fonds.component.html',
	styleUrls: ['./fonds.component.css']
})

export class FondsComponent implements OnInit {

  private _success = new Subject<string>();
  successMessage: string;   

  private _fail = new Subject<string>();
  failMessage: string;

  @ViewChild('advertencia')
  modal: ModalComponent;

  fonds: Fond[];
  fond = new Fond;
  tempData = new Fond;

  constructor(private fondService: FondsService) {
  }

  loadFonds(){
    this.fondService.getFonds().subscribe(
      (resFondData => this.fonds = resFondData)
      );
  }

  ngOnInit() {
    this.loadFonds();

    this._success.subscribe((message) => this.successMessage = message);
    this._success.debounceTime(12000).subscribe(() => this.successMessage = null);

    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.debounceTime(120000).subscribe(() => this.failMessage = null);
  }

  onSelect(fond: any): void {
    console.log(fond);
  }

  guardarDatos(fond){
    this.tempData=fond;

  }

  createFond(fond: Fond) {
    this.fondService.setFonds(fond).subscribe(
      data => console.log(this._success.next('Fondo creado exitosamente!'), data),
      error => console.error(this._fail.next('Fondo no pudo ser creado '+ `Error: ${error}`)), ()=>this.loadFonds());
  }

  updateFond(fond){
    this.tempData.document_number=fond.document_number
    this.tempData.business_name=fond.business_name;
    this.tempData.fond_type=fond.fond_type;
    this.fondService.updateFond(this.tempData).subscribe(
      data => console.log(this._success.next('Fondo editado exitosamente!'), data),
      error => console.error(this._fail.next('Fondo no pudo ser actualizado '+ `Error: ${error}`)), ()=>this.loadFonds());
  }

  deleteFond(fond) {
    console.log("dsada")
    this.fondService.deleteFond(fond.id)
    .subscribe(
      data => {this._success.next('Fondo eliminado exitosamente')},
      error => {this._fail.next('El fondo no pudo ser eliminado')},
      ()=>this.loadFonds()
      );

  }


}