import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class StatisticsService {

	private url : string = "http://localhost:3000/api/v1/users.json";

  constructor(private http: Http) { }
  
  getStatistics(){
    return this.http.get(this.url).map((response:Response) => response.json());
  }
}
