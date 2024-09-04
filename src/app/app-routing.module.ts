import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CadUsuarioComponent } from './pages/usuario/cad-usuario/cad-usuario.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { MaterialComponent } from './pages/material/material.component';

import { RotacaoComponent } from './pages/rotacao/rotacao.component';
import { arvoreComponent } from './pages/arvore/arvore.component';
import { colheitaComponent } from './pages/colheita/colheita.component';
import { PomarcadComponent } from './pages/pomarcad/pomarcad.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'cadUsuario',component:CadUsuarioComponent},
  {path:'material',component:MaterialComponent},
  {path:'produto',component:ProdutoComponent},
  {path:'pomarcad',component:PomarcadComponent},
  {path:'rotacao',component:RotacaoComponent},
  {path:'arvore',component:arvoreComponent},
  {path:'colheita',component:colheitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
