import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AreasService {

	private url : string = "http://localhost:3000/api/v1/areas.json";
	
    constructor(private http: Http) { }
	getAreas(){
	    return this.http.get(this.url).map((response:Response) => response.json());
	}
}