import {Component, OnInit} from '@angular/core';
import {ExperienceService} from "../../service/experience.service";
import {LoginService} from "../../service/login.service";
import {FormationResponse} from "../../model/formation/formation-response";
import {FormationService} from "../../service/formation.service";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor(private _formationService:FormationService,
              private _loginService:LoginService) { }
  id!:string
  formationResponseList=new Array<FormationResponse>()
  message=''
  ngOnInit(): void {
    this.getId();
    this.getFormations()
  }
  getId(){
    this.id=this._loginService.getIdPersona() ?? "840ab640-7c25-4c86-b275-f1846eb0059e"
  }
  getFormations(){
    this._formationService.getFormation(this.id).subscribe({
      next:result => {
        this.formationResponseList=result;
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
  delete(){
    this._formationService.deleteFormation(this.id).subscribe({
      next:result => {
        this.getFormations()
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
