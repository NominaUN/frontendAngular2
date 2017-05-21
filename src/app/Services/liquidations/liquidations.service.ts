import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PaydayMaster } from '../../Models/payday_master'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LiquidationsService {

	private urlget: string = "http://localhost:3000/api/v1/payday_masters.json";
	private urlpost: string = "http://localhost:3000/api/v1/payday_masters"
	headers: Headers;
	options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  getLiquidations(): Observable<PaydayMaster[]> {
    return this.http.get(this.urlget).map((response: Response) => <PaydayMaster[]>response.json().data);
  }

  setLiquidations(payday_master: PaydayMaster): Observable<PaydayMaster> {
    return this.http.post(this.urlpost, JSON.stringify(payday_master), this.options).map(response => response.json())
  }
  
}