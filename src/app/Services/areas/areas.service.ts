import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Area } from '../../Models/area'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AreasService {

    //private urlget: string = "http://localhost:3000/api/v1/areas.json";
    private urlget: string = "https://hidden-shore-15479.herokuapp.com/api/v1/areas.json";
    private urlpost: string = "https://hidden-shore-15479.herokuapp.com/api/v1/areas"
    headers: Headers;
    options: RequestOptions;



    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });


    }
    getAreas(): Observable<Area[]> {
        return this.http.get(this.urlget).map((response: Response) => <Area[]>response.json().data);
    }


    setAreas(area: Area): Observable<Area> {

        return this.http.post(this.urlpost, JSON.stringify(area), this.options).map(response => response.json())
    }

    /*
    
	setAreas(name: string){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify({area_name: name});
	    
		return this.http.post(this.urlpost, body, options).map(response => response.json()).subscribe(
           data => console.log('Success uploading the area', data),
           error => console.error(`Error: ${error}`));
	}
    */

}