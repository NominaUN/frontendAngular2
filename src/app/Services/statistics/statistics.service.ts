import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class StatisticsService {

	private url : string = "/src/app/jsons/statistics.json";

    constructor(private http: Http) { }
	
	getStatistics(){
	    return this.http.get(this.url).map((response:Response) => response.json());
	}
}
