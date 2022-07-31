import { Injectable } from '@angular/core';
import {SkillRequest} from "../model/skill/skill-request";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private _http:HttpClient) { }
  urlBase = 'http://localhost:8080/v1/project'
  public saveSkill(skillRequest:SkillRequest):Observable<any>{
    const url = this.urlBase +'/'
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Authorization": sessionStorage.getItem("token")??""
      })
    };
    const body = JSON.stringify(skillRequest)
    return this._http.post(url, body, httpOptions)
  }
  public deleteSkill(idSkill:string):Observable<any>{
    const url = this.urlBase +'/'+ idSkill
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Authorization": sessionStorage.getItem("token")??""
      })
    };
    return this._http.delete(url, httpOptions)
  }
}
