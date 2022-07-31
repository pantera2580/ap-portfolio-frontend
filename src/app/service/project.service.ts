import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectRequest} from "../model/project/project-request";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private _http:HttpClient) { }
  urlBase = 'http://localhost:8080/v1/academic'

  public getProject(idPerson:string):Observable<any>{
    const url = this.urlBase + '/public/' + idPerson
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };
    return this._http.get(url, httpOptions)
  }
  public saveProject(projectRequest:ProjectRequest):Observable<any>{
    const url = this.urlBase +'/'
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Authorization": sessionStorage.getItem("token")??""
      })
    };
    const body = JSON.stringify(projectRequest)
    return this._http.post(url, body, httpOptions)
  }
  public deleteProject(idProject:string):Observable<any>{
    const url = this.urlBase +'/'+ idProject
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Authorization": sessionStorage.getItem("token")??""
      })
    };
    return this._http.delete(url, httpOptions)
  }
}
