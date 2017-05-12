import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GeneralParametersService {

  private urlget : string = "http://localhost:3000/api/v1/general_parameters.json";
  private urlpost : string = "http://localhost:3000/api/v1/general_parameters";	
	
    constructor(private http: Http) { }
	getGenerals(){
	    return this.http.get(this.urlget).map((response:Response) => response.json());
	}
	setGenerals(round: string, laboral: string, payday: string, integral: string){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify({round_type: parseInt(round), laboral_days: parseInt(laboral), payday: payday, integral_base: integral});
	    
		return this.http.put(this.urlpost, body, options).map(response => response.json()).subscribe(
           data => console.log('Success uploading the parameters', data),
           error => console.error(`Error: ${error}`));
	}
}
