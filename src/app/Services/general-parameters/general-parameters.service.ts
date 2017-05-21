import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GeneralParameter } from '../../Models/general-parameter'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeneralParametersService {

	private urlget : string = "http://localhost:3000/api/v1/general_parameters.json";
	private urlput : string = "http://localhost:3000/api/v1/general_parameters/1";
	headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  getGeneral(): Observable<GeneralParameter[]> {
    return this.http.get(this.urlget).map((response: Response) => <GeneralParameter[]>response.json().data);
  }

  setGeneral(general: GeneralParameter): Observable<GeneralParameter> {
    return this.http.put(this.urlput, JSON.stringify(general), this.options).map(response => response.json())
  }  
  
}
