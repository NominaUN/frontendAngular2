import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PositionsService {

  private urlget : string = "http://localhost:3000/api/v1/positions.json";
  private urlpost : string = "http://localhost:3000/api/v1/positions";
	
    constructor(private http: Http) { }
	getPositions(){
	    return this.http.get(this.urlget).map((response:Response) => response.json());
	}
	setPositions(name: string){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify({position_name: name});
	    
		return this.http.post(this.urlpost, body, options).map(response => response.json()).subscribe(
           data => console.log('Success uploading the position', data),
           error => console.error(`Error: ${error}`));
	}
}
