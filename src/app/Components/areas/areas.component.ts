import { Component, OnInit } from '@angular/core';
import { AreasService } from  '../../Services/areas/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  areas=[];

  constructor(private areaService: AreasService) {
  }

  ngOnInit() {
     this.areaService.getAreas().subscribe(
     (resAreaData => this.areas = resAreaData)
     );

    
  }
  
  onSelect(area:any):void {
  	console.log(area);
  }


}
