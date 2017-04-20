import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GeneralParametersService {

  private url : string = "http://localhost:3000/api/v1/general_parameters.json";
	
    constructor(private http: Http) { }
	getGenerals(){
	    return this.http.get(this.url).map((response:Response) => response.json());
	}
}
