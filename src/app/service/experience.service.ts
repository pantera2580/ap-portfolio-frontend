import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExperienceRequest} from "../model/experience/experience-request";

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
  public saveExperience(experienceRequest:ExperienceRequest):Observable<any>{
    const url = this.urlBase +'/'
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Authorization": sessionStorage.getItem("token")??""
      })
    };
    const body = JSON.stringify(experienceRequest)
    return this._http.post(url, body, httpOptions)
  }
  public deleteExperience(idExperience:string):Observable<any>{
    const url = this.urlBase +'/'+ idExperience
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Authorization": sessionStorage.getItem("token")??""
      })
    };
    return this._http.delete(url, httpOptions)
  }
}
