import { Component, OnInit } from '@angular/core';
import { LiquidationsService } from  '../../Services/liquidations/liquidations.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-liquidations',
  templateUrl: './liquidations.component.html',
  styleUrls: ['./liquidations.component.css']
})
export class LiquidationsComponent implements OnInit {

    liquidations=[];

  constructor(private liquidationsService: LiquidationsService) { }
 
  ngOnInit() {
     this.liquidationsService.getLiquidations().subscribe(
     (resLiquidationData => this.liquidations = resLiquidationData));

    
  }

}
