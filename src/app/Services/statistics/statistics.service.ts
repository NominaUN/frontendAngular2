import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../../Models/resEmployeeData.model'
import { Noveltie } from '../../Models/resNoveltiesData.model'
import { Detail } from '../../Models/payday-detail'
import { Vacation } from '../../Models/vacation'
import { Observable } from 'rxjs/Rx' 

@Injectable()
export class StatisticsService {

	private url1 : string = "http://localhost:3000/api/v1/employees.json";
	private url2 : string = "http://localhost:3000/api/v1/novelties.json";
	private url3 : string = "http://localhost:3000/api/v1/payday_details.json";
	private url4 : string = "http://localhost:3000/api/v1/vacations.json";
	headers: Headers;
	options: RequestOptions;

	constructor(private http: Http) { 
		this.headers = new Headers({ 'Content-Type': 'application/json' });
		this.options = new RequestOptions({ headers: this.headers });
	}
  
	getEmployeesStats(): Observable<Employee[]>{
		return this.http.get(this.url1).map((response:Response) => <Employee[]>response.json().data);
	}
	
	getNoveltiesStats(): Observable<Noveltie[]>{
		return this.http.get(this.url2).map((response:Response) => <Noveltie[]>response.json().data);
	}
	
	getLiquidationsStats(): Observable<Detail[]>{
		return this.http.get(this.url3).map((response:Response) => <Detail[]>response.json().data);
	}
	
	getVacationsStats(): Observable<Vacation[]>{
		return this.http.get(this.url4).map((response:Response) => <Vacation[]>response.json().data);
	}
}
