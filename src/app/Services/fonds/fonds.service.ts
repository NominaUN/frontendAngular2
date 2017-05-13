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

}
