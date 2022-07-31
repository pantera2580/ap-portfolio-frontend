import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../service/person.service";
import {LoginService} from "../../service/login.service";
import {PersonResponse} from "../../model/person/person-response";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private _personService:PersonService,
              private _loginService:LoginService) { }
  id!:string
  personResponse = new PersonResponse()
  message=''
  ngOnInit(): void {
    this.getId()
    this.getPerson()
  }
  getId(){
    this.id=this._loginService.getIdPersona() ?? "840ab640-7c25-4c86-b275-f1846eb0059e"
  }
  getPerson(){
    this._personService.getPerson(this.id).subscribe({
      next:result => {
        this.personResponse = result
      },
      error: err => {
        if(err.statusCode == 404)
          this.message="Person not found"
        if (err.statusCode == 403)
          this.message="Forbidden"
      }
    })
  }
}
