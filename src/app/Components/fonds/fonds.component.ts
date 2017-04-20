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

  ngOnInit() {
     this.fondService.getFonds().subscribe(
     (resFondData => this.fonds = resFondData)
     );

    
  }
  
  onSelect(fond:any):void {
  	console.log(fond);
  }

}
