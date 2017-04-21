import { Component, OnInit } from '@angular/core';
import { GeneralParametersService } from  '../../Services/general-parameters/general-parameters.service';

@Component({
  selector: 'app-general-parameters',
  templateUrl: './general-parameters.component.html',
  styleUrls: ['./general-parameters.component.css']
})

export class GeneralParametersComponent implements OnInit {

  generals=[];

  constructor(private generalService: GeneralParametersService) {
  }
 
  loadGenerals(){
	this.generalService.getGenerals().subscribe(
		(resGeneralData => this.generals = resGeneralData)
    );
  }
  
  ngOnInit() {
    this.loadGenerals();   
  }
  
  onSelect(general:any):void {
  	console.log(general);
  }

  onClick(event){
	var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
	if (value === "setGeneral") {
		var round = (<HTMLInputElement>document.getElementById("roundGeneral")).value;
		if (round === "Unidades"){
			round = "1";
		} else if (round === "Decenas"){
			round = "10";
		} else if (round === "Centenas"){
			round = "100";
		} else if (round === "Miles"){
			round = "1000";
		} 
		var days = (<HTMLInputElement>document.getElementById("laboralGeneral")).value;
		var payday = (<HTMLInputElement>document.getElementById("paydayGeneral")).value;
		var integral = (<HTMLInputElement>document.getElementById("integralGeneral")).value;
		if (integral === "70%"){
			integral = "70";
		}
		this.generalService.setGenerals(round,days,payday,integral);
		location.reload();
	}
  } 

}
