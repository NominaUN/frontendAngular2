import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Concept } from '../../Models/concept'
import { Observable } from 'rxjs/Rx' 

@Injectable()
export class ConceptsService {

	private urlget : string = "http://localhost:3000/api/v1/concepts.json";
	private urlpost : string = "http://localhost:3000/api/v1/concepts"
	headers: Headers;
	options: RequestOptions;

  constructor(private http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  getConcepts(): Observable<Concept[]> {
    return this.http.get(this.urlget).map((response:Response) => <Concept[]>response.json().data);
  }
  
  setConcepts(concept : Concept){
    return this.http.post(this.urlpost, JSON.stringify(concept), this.options).map(response => response.json())
  }
  
}
