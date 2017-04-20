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

  ngOnInit() {
     this.generalService.getGenerals().subscribe(
     (resGeneralData => this.generals = resGeneralData)
     );

    
  }
  
  onSelect(general:any):void {
  	console.log(general);
  }

}
