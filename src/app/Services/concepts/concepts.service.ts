import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ConceptsService {

  private urlget : string = "http://localhost:3000/api/v1/concepts.json";
  private urlpost : string = "http://localhost:3000/api/v1/concepts"
	
    constructor(private http: Http) { }
	getConcepts(){
	    return this.http.get(this.urlget).map((response:Response) => response.json());
	}
	setConcepts(name: string, category: string){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify({concept_name: name, category: category});
	    
		return this.http.post(this.urlpost, body, options).map(response => response.json()).subscribe(
           data => console.log('Success uploading the concept', data),
           error => console.error(`Error: ${error}`));
	}
}
