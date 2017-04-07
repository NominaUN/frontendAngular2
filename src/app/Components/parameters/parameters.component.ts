import { Component, OnInit } from '@angular/core';
import { ParametersService } from  '../../Services/parameters/parameters.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  parameters=[];

  constructor(private parametersService: ParametersService) { }
 
  ngOnInit() {
     this.parametersService.getParameters().subscribe(
     (resParameterData => this.parameters = resParameterData));

    
  }
}
