import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Position } from '../../Models/position'
import { Observable } from 'rxjs/Rx';
 
@Injectable()
export class PositionsService {

  private urlget : string = "https://hidden-shore-15479.herokuapp.com/api/v1/positions.json";
  private urlpost : string = "https://hidden-shore-15479.herokuapp.com/api/v1/positions";
  headers: Headers;
  options: RequestOptions;

    constructor(private http: Http) { 

		this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });

	}
	getPositions(): Observable<Position[]>{
	    return this.http.get(this.urlget).map((response:Response) => <Position[]>response.json().data);
	}
	setPositions (position: Position): Observable<Position>{
        return this.http.post(this.urlpost, JSON.stringify(position), this.options).map(response => response.json())

	}
}
