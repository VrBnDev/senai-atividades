import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Importações do Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from '../app/inicio/inicio.component'
import { LoginComponent } from './login/login.component'; 
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestritoComponent } from './restrito/restrito.component';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';
import { RouterOutlet } from '@angular/router';
import { MenuProdutoComponent } from './restrito/menu-produto/menu-produto.component';
import { ListaProdutoComponent } from './restrito/lista-produto/lista-produto.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';



@NgModule({
    declarations:[  
    ],
    imports:[ 
        BrowserModule, 
        AppRoutingModule, 
        BrowserAnimationsModule, 
        MatButtonModule, 
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatToolbar,
        InicioComponent,
        LoginComponent,
        MenuComponent,
        RodapeComponent,
        RestritoComponent,
        AtualizaProdutoComponent,
        RouterOutlet,
        MenuProdutoComponent,
        ListaProdutoComponent,
        CadastroProdutoComponent,
    ],
    providers:[],
    bootstrap:[MatButtonModule, MatIconModule]
})

export class AppModule { }