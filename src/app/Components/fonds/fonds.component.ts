import { Component, OnInit } from '@angular/core';
import { FondsService } from  '../../Services/fonds/fonds.service';
import { Fond } from '../../Models/fond';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-fonds',
	templateUrl: './fonds.component.html',
	styleUrls: ['./fonds.component.css']
})

export class FondsComponent implements OnInit {
	
	fonds: Fond[];
    fond = new Fond;
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

    createFond(fond: Fond) {
        this.fondService.setFonds(fond).subscribe(
            data => console.log('Success uploading the fond', data),
            error => console.error(`Error: ${error}`), ()=>this.loadFonds());
    }
	
}