import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../../Models/resEmployeeData.model'

@Injectable()
export class EmployeesService {

  //private url : string = "http://localhost:3000/api/v1/employees.json";
  //private urlpost : string = "http://localhost:3000/api/v1/employees/";

  private url : string = "https://hidden-shore-15479.herokuapp.com/v1/employees.json";
  private urlpost : string = "https://hidden-shore-15479.herokuapp.com/api/v1/employees/";


  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getEmployees(){
    return this.http.get(this.url).map((response:Response) => response.json());
  }

  setEmployee(employee:Employee):Observable<Employee>{
    return this.http.post(this.urlpost, JSON.stringify(employee), this.options).map(response => response.json())
  }

  updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put(this.urlpost + employee.id, JSON.stringify(employee), this.options).map(response => response.json())
  }

  getEmployeeById(id:number){
    return this.http.get(this.urlpost + id).map((response:Response) => response.json());
  }

  // To DO: comprove in real url and method
  delEmployee(id: number){
    return this.http.delete(this.urlpost + id, this.options).map((response:Response) => response.json());
  }

}
