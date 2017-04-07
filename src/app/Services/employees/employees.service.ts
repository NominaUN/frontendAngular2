import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {

  private url : string = "/src/app/jsons/employee.json";


  

  constructor(private http: Http) { 



  }

        getEmployees(){

           // return this.test;

            return this.http.get(this.url).map((response:Response) => response.json());

            
        }


}
