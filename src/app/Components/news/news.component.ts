import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  novelties;
  
  constructor(private http: Http) {
    http.get('/src/app/jsons/news.json')
        .subscribe(res => this.novelties = res.json());
  }

  ngOnInit() {
  }

}
