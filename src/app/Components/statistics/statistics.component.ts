import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  statistics;
  
  constructor(private http: Http) {
    http.get('/src/app/jsons/statistics.json')
        .subscribe(res => this.statistics = res.json());
  }

  ngOnInit() {
  }

}
