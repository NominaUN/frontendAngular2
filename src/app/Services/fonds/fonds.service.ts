import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Fond } from '../../Models/fond'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FondsService {
	
	private urlget : string = "http://localhost:3000/api/v1/fonds.json";
	private urlpost : string = "http://localhost:3000/api/v1/fonds";
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  getFonds(): Observable<Fond[]> {
    return this.http.get(this.urlget).map((response: Response) => <Fond[]>response.json().data);
  }

  setFonds(fond: Fond): Observable<Fond> {
    return this.http.post(this.urlpost, JSON.stringify(fond), this.options).map(response => response.json())
  }

  updateFond(fond): Observable<Fond> {
    const url = `${this.urlpost}/${fond.id}`;
    console.log(url)
    return this.http.put(url, JSON.stringify(fond), 
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
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  deleteFond(id: number): Observable<Fond> {
    const url = `${this.urlpost}/${id}`;
    return this.http.delete(url, this.options)
    .map(this.extractData)
    .catch(this.handleError);         
  }
  

}
