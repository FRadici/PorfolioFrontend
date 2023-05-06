import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './@components/about/about.module';
import { ContactModule } from './@components/contact/contact.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { CurriculumModule } from './@components/curriculum/curriculum.module';
import { HeaderModule } from './@components/header/header.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { PorfolioModule } from './@components/porfolio/porfolio.module';
import { SkillsModule } from './@components/skills/skills.module';
import { FooterModule } from './@components/footer/footer.module';
import { UsuarioModule } from './@components/usuario/usuario.module';
import { NavbarComponent } from './@components/navbar/navbar.component';
import { HeaderComponent } from './@components/header/header.component';
import { PorfolioComponent } from './@components/porfolio/porfolio.component';
import { AboutComponent } from './@components/about/about.component';
import { ContactComponent } from './@components/contact/contact.component';
import { FooterComponent } from './@components/footer/footer.component';
import { CopyrightComponent } from './@components/copyright/copyright.component';
import { CurriculumComponent } from './@components/curriculum/curriculum.component';
import { SkillsComponent } from './@components/skills/skills.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PorfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    CopyrightComponent,
    CurriculumComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
    
      ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
