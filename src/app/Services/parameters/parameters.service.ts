import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ParametersService {

  private url : string = "http://localhost:3000/api/v1/fonds.json";

  constructor(private http: Http) { }

  getParameters(){
    return this.http.get(this.url).map((response:Response) => response.json());
  }
}
