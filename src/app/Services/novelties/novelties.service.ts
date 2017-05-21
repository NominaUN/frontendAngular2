import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Noveltie } from '../../Models/resNoveltiesData.model';

@Injectable()
export class NoveltiesService {

	private url : string = "http://localhost:3000/api/v1/novelties.json";
  private urlpost : string = "http://localhost:3000/api/v1/novelties/";
  headers: Headers;
  options: RequestOptions;
  
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getNovelties(){
    return this.http.get(this.url).map((response:Response) => response.json());
  }
  
  setNoveltie(noveltie:Noveltie):Observable<Noveltie>{
    return this.http.post(this.urlpost, JSON.stringify(noveltie), this.options).map(response => response.json())
  }

  updateNoveltie(noveltie:Noveltie):Observable<Noveltie>{
    return this.http.put(this.urlpost + noveltie.id, JSON.stringify(noveltie), this.options).map(response => response.json())
  }
  
  getNoveltieById(id:number){
    return this.http.get(this.urlpost + id).map((response:Response) => response.json());
  }

  // To DO: comprove in real url and method
  delNoveltie(id: number){
    return this.http.delete(this.urlpost + id, this.options).map((response:Response) => response.json());
  }
}
