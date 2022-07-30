import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private _http:HttpClient) { }
  urlBase = 'http://localhost:8080/v1/experience'

  public getExperience(idPerson:string):Observable<any>{
    const url = this.urlBase + '/public/' + idPerson
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };
    return this._http.get(url, httpOptions)
  }
}
