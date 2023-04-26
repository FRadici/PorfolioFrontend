import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PorfolioService } from './servicio/porfolio.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    InicioComponent,
    SobremiComponent,
    SkillsComponent,
    CurriculumComponent,
    PortfolioComponent,
    ContactoComponent,
    PorfolioService,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
