import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {LoginRequest} from "../../model/login/login-request";
import {LoginResponse} from "../../model/login/login-response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService:LoginService) { }
  loginRequest= new LoginRequest;
  loginResponse!:LoginResponse;
  message=""
  ngOnInit(): void {
  }
  login(){
    this._loginService.login(this.loginRequest).subscribe({
      next:result => {
        this.loginResponse=result;
        sessionStorage.setItem("token", this.loginResponse.token)
        sessionStorage.setItem("username", this.loginResponse.username)
        sessionStorage.setItem("id", this.loginResponse.id)
        sessionStorage.setItem("id_person", this.loginResponse.id_person)
        this.message="Successful login"
      },
      error: err => {
        if(err.statusCode == 401)
          this.message="Incorrect username or password"

        if (err.statusCode == 403)
          this.message="Forbidden"
      }
    })
  }
}
