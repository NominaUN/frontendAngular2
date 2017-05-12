import { Component, OnInit } from '@angular/core';
import { LiquidationsService } from  '../../Services/liquidations/liquidations.service';
import { PaydayMaster } from '../../Models/payday_master';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-liquidations',
	templateUrl: './liquidations.component.html',
	styleUrls: ['./liquidations.component.css']
})

export class LiquidationsComponent implements OnInit {

	liquidations: PaydayMaster[];
	liquidation = new PaydayMaster;

	constructor(private liquidationsService: LiquidationsService) { }
   
    loadLiquidations() {
        this.liquidationsService.getLiquidations().subscribe(
			(resLiquidationData => this.liquidations = resLiquidationData));
    }

    ngOnInit() {
        this.loadLiquidations();
    }

    onSelect(liquidation: any): void {
        console.log(liquidation);
    }

    createPaydayMaster(liquidation: PaydayMaster) {
        this.liquidationsService.setLiquidations(liquidation).subscribe(
            data => console.log('Success uploading the liquidation', data),
            error => console.error(`Error: ${error}`), ()=>this.loadLiquidations());
    }

}