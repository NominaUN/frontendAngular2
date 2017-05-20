import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Position } from '../../Models/position'
import { Observable } from 'rxjs/Rx';
 
@Injectable()
export class PositionsService {

  private urlget : string = "http://localhost:3000/api/v1/positions.json";
  private urlpost : string = "http://localhost:3000/api/v1/positions";
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

  updatePosition(position): Observable<Position> {
        const url = `${this.urlpost}/${position.id}`;
        console.log(url)
        return this.http.put(url, JSON.stringify(position), 
                this.options).map((res: Response) => res.json())
  //                          .map(function(res : Response){ 
    //                            console.log(res.json());
      //                          res.json()
        //                        })
                            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
  } 

     deletePosition(id: number): Observable<Position> {
        const url = `${this.urlpost}/${id}`;
        console.log(url)
        return this.http.delete(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);         
    }
    private extractData(res: Response) {
      let body = res.json();
      return body || {};
    }


}
