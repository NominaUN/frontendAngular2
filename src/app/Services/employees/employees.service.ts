import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {

  private url : string = "http://localhost:3000/employees.json";

  constructor(private http: Http) { }

    getEmployees(){
          return this.http.get(this.url).map((response:Response) => response.json());
        }


}
