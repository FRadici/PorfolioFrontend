import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum.component';



@NgModule({
  declarations: [
    CurriculumComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CurriculumComponent]
})
export class CurriculumModule { }
