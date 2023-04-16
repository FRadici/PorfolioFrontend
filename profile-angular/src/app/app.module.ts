import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobremiComponent,
    SkillsComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
