import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class NovetiesService {

	private url : string = "http://localhost:3000/novelties.json";

    constructor(private http: Http) { }
	getNoveties(){
	    return this.http.get(this.url).map((response:Response) => response.json());
	}
}
