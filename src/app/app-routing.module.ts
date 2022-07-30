import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {AboutmeComponent} from "./component/aboutme/aboutme.component";
import {ExperienceComponent} from "./component/experience/experience.component";
import {FormationComponent} from "./component/formation/formation.component";
import {SkillsComponent} from "./component/skills/skills.component";
import {ProjectsComponent} from "./component/projects/projects.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'aboutme', component: AboutmeComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'education', component: FormationComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'proyects', component: ProjectsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "ignore",
      anchorScrolling:'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  AboutmeComponent,
  ExperienceComponent,
  FormationComponent,
  SkillsComponent,
  ProjectsComponent
]
