import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './@components/about/about.module';
import { ContactModule } from './@components/contact/contact.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { CurriculumModule } from './@components/curriculum/curriculum.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { PorfolioModule } from './@components/porfolio/porfolio.module';
import { SkillsModule } from './@components/skills/skills.module';


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
  bootstrap: [AppComponent]
})
export class AppModule { }
