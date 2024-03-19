import { Component } from '@angular/core';
import { MenuProdutoComponent } from './menu-produto/menu-produto.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-restrito',
  standalone: true,
  imports: [MenuProdutoComponent, RouterOutlet],
  templateUrl: './restrito.component.html',
  styleUrl: './restrito.component.css'
})
export class RestritoComponent {

}
