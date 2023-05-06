import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './@components/principal/principal.component';
import { UsuarioComponent } from './@components/usuario/usuario.component';

const routes: Routes = [
  {path:'principal',component:PrincipalComponent},
  {path: 'usuario',component:UsuarioComponent},
  {path: '', redirectTo: 'usuario',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
