import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FondsService {

	private url : string = "http://localhost:3000/api/v1/fonds.json";
	
    constructor(private http: Http) { }
	getFonds(){
	    return this.http.get(this.url).map((response:Response) => response.json());
	}


}
