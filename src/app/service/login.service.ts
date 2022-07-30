import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../model/login/login-request";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private _http:HttpClient) { }
  url = 'http://localhost:8080/v1/auth/login'

  public login(loginRequest:LoginRequest):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };
    const body = JSON.stringify(loginRequest);
    console.log(body);
    return this._http.post(this.url, body, httpOptions)
  }
  public logout(){
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("id")
    sessionStorage.removeItem("id_person")
  }
  public isLogin(){
    return sessionStorage.getItem("username")!=null;
  }
  public getToken(){
    return sessionStorage.getItem("token");

  }
  public userLogin(){
    return sessionStorage.getItem("username")
  }
  public getIdPersona(){
    return sessionStorage.getItem("id_person")
  }
}
