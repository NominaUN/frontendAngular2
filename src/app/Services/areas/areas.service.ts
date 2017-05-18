import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Area } from '../../Models/area'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class AreasService {

    //private urlget: string = "https://hidden-shore-15479.herokuapp.com/api/v1/areas.json";
    //private urlpost: string = "https://hidden-shore-15479.herokuapp.com/api/v1/areas"


    private urlget : string = "http://localhost:3000/api/v1/areas.json";
    private urlpost : string = "http://localhost:3000/api/v1/areas"
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

   
    updateArea(area): Observable<Area> {
        const url = `${this.urlpost}/${area.id}`;
        console.log(url)
        return this.http.put(url, JSON.stringify(area), 
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


}