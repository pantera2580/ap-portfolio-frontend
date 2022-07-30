import { Component, OnInit } from '@angular/core';
import {ExperienceService} from "../../service/experience.service";
import {LoginService} from "../../service/login.service";
import {PersonResponse} from "../../model/person/person-response";
import {ExperienceResponse} from "../../model/experience/experience-response";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private _experienceService:ExperienceService,
              private _loginService:LoginService) { }
  id:string=''
  experienceResponseList=new Array<ExperienceResponse>()
  message=''
  ngOnInit(): void {
    this.getId();
    this.getExperiences()
  }
  getId(){
    this.id=this._loginService.getIdPersona() ?? "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
  getExperiences(){
    this._experienceService.getExperience(this.id).subscribe({
      next:result => {
        this.experienceResponseList=result;
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
