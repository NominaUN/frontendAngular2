import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FondsService {

	//private urlget : string = "http://localhost:3000/api/v1/fonds.json";
	//private urlpost : string = "http://localhost:3000/api/v1/fonds";

	private urlget : string = "https://hidden-shore-15479.herokuapp.com/api/v1/fonds.json";
	private urlpost : string = "https://hidden-shore-15479.herokuapp.com/api/v1/fonds";
	
    constructor(private http: Http) { }
	getFonds(){
	    return this.http.get(this.urlget).map((response:Response) => response.json());
	}
	setFonds(doctype: string, docnumber: string, name: string, category: string){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify({document_type: doctype, document_number: parseInt(docnumber), business_name: name, fond_type: category});
	    
		return this.http.post(this.urlpost, body, options).map(response => response.json()).subscribe(
           data => console.log('Success uploading the fond', data),
           error => console.error(`Error: ${error}`));
	}

}
