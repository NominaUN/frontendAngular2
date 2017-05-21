import { Component, OnInit } from '@angular/core';
import { GeneralParametersService } from  '../../Services/general-parameters/general-parameters.service';
import { GeneralParameter } from '../../Models/general-parameter'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-general-parameters',
  templateUrl: './general-parameters.component.html',
  styleUrls: ['./general-parameters.component.css']
})

export class GeneralParametersComponent implements OnInit {

  generalp: GeneralParameter[];
  general = new GeneralParameter;
  constructor(private generalService: GeneralParametersService) {
  }

  loadGeneral(){
    this.generalService.getGeneral().subscribe(
      (resGeneralData => this.generalp = resGeneralData)
      );
    console.log(this.generalp)
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   


  ngOnInit() {
    this.loadGeneral();   
  }

  onSelect(fond: any): void {
    console.log(fond);
  }

  updateGeneral(general: GeneralParameter) {
    this.generalService.setGeneral(general).subscribe(
      data => console.log('Success uploading the parameters', data),
      error => console.error(`Error: ${error}`), ()=>this.loadGeneral());
  }

}
