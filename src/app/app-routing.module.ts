import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadUsuarioComponent } from './pages/usuario/cad-usuario/cad-usuario.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { PomarcadComponent } from './pages/pomarcad/pomarcad.component';
import { MovimentoComponent } from './pages/movimento/movimento.component';
import { ColheitaComponent } from './pages/colheita/colheita.component';
import { MaterialComponent } from './pages/material/material.component';
import { ArvoreComponent } from './pages/arvore/arvore.component';

const routes: Routes = [
  {path: '',redirectTo:'login' ,pathMatch: 'full'},
  {path:'login' ,component:LoginComponent},
  {path:'home' ,component:HomeComponent},
  {path:'cadUsuario' ,component:CadUsuarioComponent},
  {path:'cadMaterial' , component:MaterialComponent},
  {path:'cadProduto' , component:ProdutoComponent},
  {path:'cadPomarcad' , component:PomarcadComponent},
  {path:'cadMovimento' , component:MovimentoComponent},
  {path:'cadColheita' , component:ColheitaComponent},
  {path:'cadArvore' , component:ArvoreComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
