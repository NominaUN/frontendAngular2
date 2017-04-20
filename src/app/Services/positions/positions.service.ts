import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PositionsService {

  private url : string = "http://localhost:3000/api/v1/positions.json";
	
    constructor(private http: Http) { }
	getPositions(){
	    return this.http.get(this.url).map((response:Response) => response.json());
	}

}
