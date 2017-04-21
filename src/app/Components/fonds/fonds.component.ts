import { Component, OnInit } from '@angular/core';
import { FondsService } from  '../../Services/fonds/fonds.service';

@Component({
  selector: 'app-fonds',
  templateUrl: './fonds.component.html',
  styleUrls: ['./fonds.component.css']
})
export class FondsComponent implements OnInit {

  fonds=[];

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
  
  onSelect(fond:any):void {
  	console.log(fond);
  }

  onClick(event){
	var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
	if (value === "setFond") {
		var tipodoc = "NIT.";
		var numero = (<HTMLInputElement>document.getElementById("docNumberFond")).value;
		var nombre = (<HTMLInputElement>document.getElementById("nameFond")).value;
		var category = (<HTMLInputElement>document.getElementById("typeFond")).value;
		this.fondService.setFonds(tipodoc, numero, nombre, category);
		location.reload();
	}
  }

}
