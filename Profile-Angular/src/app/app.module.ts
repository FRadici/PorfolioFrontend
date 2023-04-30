import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageItemComponent } from './@widgets/image-item/image-item.component';
import { ContactoModule } from './@components/contacto/contacto.module';
import { CurriculumModule } from './@components/curriculum/curriculum.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { ProfileModule } from './@components/profile/profile.module';
import { SkillsModule } from './@components/skills/skills.module';
import { SobremiModule } from './@components/sobremi/sobremi.module';

@NgModule({
  declarations: [
    AppComponent,
     ],
  imports: [
    BrowserModule,
    ContactoModule,
    CurriculumModule,
    NavbarModule,
    ProfileModule,
    SkillsModule,
    SobremiModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
