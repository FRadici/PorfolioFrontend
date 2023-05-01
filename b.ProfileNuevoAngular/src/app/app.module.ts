import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './@components/about/about.module';
import { ContactModule } from './@components/contact/contact.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { CurriculumModule } from './@components/curriculum/curriculum.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderComponent } from './@components/header/header.component';
import { HeaderModule } from './@components/header/header.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { PorfolioModule } from './@components/porfolio/porfolio.module';
import { SkillsModule } from './@components/skills/skills.module';
import { loginComponents} from './@components/login/login.component';
import { Routes } from '@angular/router';




const appRoutes:Routes=[
  {path:'login',component:loginComponents}

];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    CopyrightModule,
    CurriculumModule,
    FooterModule,
    HeaderModule,
    NavbarModule,
    PorfolioModule,
    SkillsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
