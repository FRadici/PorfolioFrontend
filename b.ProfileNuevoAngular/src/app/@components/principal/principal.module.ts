import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { ContactModule } from "../contact/contact.module";
import { FooterModule } from "../footer/footer.module";
import { CopyrightModule } from "../copyright/copyright.module";
import { SkillsModule } from "../skills/skills.module";
import { NavbarModule } from "../navbar/navbar.module";
import { HeaderModule } from "../header/header.module";
import { AboutModule } from "../about/about.module";
import { CurriculumModule } from "../curriculum/curriculum.module";
import { PorfolioModule } from "../porfolio/porfolio.module";



@NgModule({
    declarations: [
        PrincipalComponent
    ],
    imports: [
        CommonModule,
        ContactModule,
        FooterModule,
        CopyrightModule,
        SkillsModule,
        NavbarModule,
        HeaderModule,
        AboutModule,
        CurriculumModule,
        PorfolioModule
    ]
})
export class PrincipalModule { }
