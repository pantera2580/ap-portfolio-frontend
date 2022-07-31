import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormationRequest} from "../model/formation/formation-request";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private _http:HttpClient) { }
  urlBase = 'http://localhost:8080/v1/academic'

  public getFormation(idPerson:string):Observable<any>{
    const url = this.urlBase + '/public/' + idPerson
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };
    return this._http.get(url, httpOptions)
  }
  public saveFormation(formationRequest:FormationRequest):Observable<any>{
    const url = this.urlBase +'/'
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Authorization": sessionStorage.getItem("token")??""
      })
    };
    const body = JSON.stringify(formationRequest)
    return this._http.post(url, body, httpOptions)
  }
  public deleteFormation(idFormation:string):Observable<any>{
    const url = this.urlBase +'/'+ idFormation
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Authorization": sessionStorage.getItem("token")??""
      })
    };
    return this._http.delete(url, httpOptions)
  }
}
