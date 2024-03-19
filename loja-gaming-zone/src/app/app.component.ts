import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'; 
import { MenuComponent} from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CommonModule } from '@angular/common';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from "./restrito/cadastro-produto/cadastro-produto.component";
import { ListaProdutoComponent } from "./restrito/lista-produto/lista-produto.component";
import { MenuProdutoComponent } from "./restrito/menu-produto/menu-produto.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [AtualizaProdutoComponent, RouterOutlet, RouterLink, MenuComponent, InicioComponent, LoginComponent, RodapeComponent, RouterLinkActive, CommonModule, CadastroProdutoComponent, ListaProdutoComponent, MenuProdutoComponent]
})
export class AppComponent {
  title = 'Loja Gaming Zone';
}
