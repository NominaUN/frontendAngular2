import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LiquidationsService {

  private url : string = "http://localhost:3000/payday_details.json";

  constructor(private http: Http) { }

    getLiquidations(){
          return this.http.get(this.url).map((response:Response) => response.json());
        }
}
