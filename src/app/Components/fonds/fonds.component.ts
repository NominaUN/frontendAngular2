import { Component, OnInit, ViewChild } from '@angular/core';
import { FondsService } from  '../../Services/fonds/fonds.service';
import { Fond } from '../../Models/fond';
import { Observable } from 'rxjs/Rx';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
	selector: 'app-fonds',
	templateUrl: './fonds.component.html',
	styleUrls: ['./fonds.component.css']
})

export class FondsComponent implements OnInit {
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
  }

  onSelect(fond: any): void {
    console.log(fond);
  }

  guardarDatos(fond){
    this.tempData=fond;

  }

  createFond(fond: Fond) {
    this.fondService.setFonds(fond).subscribe(
      data => console.log('Success uploading the fond', data),
      error => console.error(`Error: ${error}`), ()=>this.loadFonds());
  }

  updateFond(fond){
    this.tempData.document_number=fond.document_number
    this.tempData.business_name=fond.business_name;
    this.tempData.fond_type=fond.fond_type;
    this.fondService.updateFond(this.tempData).subscribe(
      data => console.log('Success uploading the area', data),
      error => console.error(`Error: ${error}`), ()=>this.loadFonds());
  }

  deleteFond(fond) {
    console.log("dsada")
    this.fondService.deleteFond(fond.id)
    .subscribe(
      data => {},
      error => {this.modal.open()},
      ()=>this.loadFonds()
      );

  }


}