import { Component, OnInit } from '@angular/core';
import { NoveltiesService } from  '../../Services/novelties/novelties.service';


@Component({
  selector: 'app-novelties',
  templateUrl: './novelties.component.html',
  styleUrls: ['./novelties.component.css']
})
export class NoveltiesComponent implements OnInit {

 novelties=[];

  constructor(private noveltiesService: NoveltiesService) {
  }

  ngOnInit() {
     this.noveltiesService.getNovelties().subscribe(
     (resNoveltiesData => this.novelties = resNoveltiesData)
     );

    
  }

}
