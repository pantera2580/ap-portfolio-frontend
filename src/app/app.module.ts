import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {LoginService} from "./service/login.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { FormationComponent } from './component/formation/formation.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProyectsComponent } from './component/proyects/proyects.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AboutmeComponent,
    ExperienceComponent,
    FormationComponent,
    SkillsComponent,
    ProyectsComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        RouterModule
    ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
