import { Component, OnInit } from '@angular/core';
import {ExperienceService} from "../../service/experience.service";
import {LoginService} from "../../service/login.service";
import {ExperienceResponse} from "../../model/experience/experience-response";
import {ExperienceRequest} from "../../model/experience/experience-request";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private _experienceService:ExperienceService,
              public loginService:LoginService) { }
  id!:string
  experienceResponseList=new Array<ExperienceResponse>()
  experienceRequest=new ExperienceRequest()
  message=''
  ngOnInit(): void {
    this.getId();
    this.getExperiences()
  }
  getId(){
    this.id=this.loginService.getIdPersona() ?? '840ab640-7c25-4c86-b275-f1846eb0059e'
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
  save(){
  }
  delete(idExperience:string){
    this._experienceService.deleteExperience(idExperience).subscribe({
      next:result => {
        this.getExperiences()
      },
      error: err => {
        if(err.statusCode == 404)
          this.message="Person not found"
        if (err.statusCode == 403)
          this.message="Forbidden"
      }
    })
  }
  update(){

  }

}
