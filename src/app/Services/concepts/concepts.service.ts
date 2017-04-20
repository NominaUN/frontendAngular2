import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ConceptsService {

  private url : string = "http://localhost:3000/api/v1/concepts.json";
	
    constructor(private http: Http) { }
	getConcepts(){
	    return this.http.get(this.url).map((response:Response) => response.json());
	}

}
