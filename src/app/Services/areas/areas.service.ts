import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AreasService {

	private urlget : string = "http://localhost:3000/api/v1/areas.json";
	private urlpost : string = "http://localhost:3000/api/v1/areas"
	
    constructor(private http: Http) { }
	getAreas(){
	    return this.http.get(this.urlget).map((response:Response) => response.json());
	}
	setAreas(name: string){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify({area_name: name});
	    
		return this.http.post(this.urlpost, body, options).map(response => response.json()).subscribe(
           data => console.log('Success uploading the area', data),
           error => console.error(`Error: ${error}`));
	}
}