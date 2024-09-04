import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule} from '@fortawesome/angular-fontAwesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CadUsuarioComponent } from './pages/usuario/cad-usuario/cad-usuario.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MaterialComponent } from './pages/material/material.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { PomarcadComponent } from './pages/pomarcad/pomarcad.component';
import { RotacaoComponent } from './pages/rotacao/rotacao.component';
import { arvoreComponent } from './pages/arvore/arvore.component';
import { colheitaComponent } from './pages/colheita/colheita.component';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './page/login/login.component';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CadUsuarioComponent,
    MaterialComponent,
    ProdutoComponent,
    
    RotacaoComponent,
    arvoreComponent,
    colheitaComponent,
    PomarcadComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync(),provideNativeDateAdapter(),{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
