import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class NoveltiesService {

	private url : string = "http://localhost:3000/api/v1/novelties.json";
	
    constructor(private http: Http) { }
	getNovelties(){
	    return this.http.get(this.url).map((response:Response) => response.json());
	}
}
