import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioComponent } from './porfolio.component';



@NgModule({
  declarations: [
    PorfolioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PorfolioComponent]
})
export class PorfolioModule { }
