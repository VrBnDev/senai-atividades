import { Component } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu-produto',
  standalone: true,
  imports: [MatToolbar,MatToolbarRow],
  templateUrl: './menu-produto.component.html',
  styleUrl: './menu-produto.component.css'
})
export class MenuProdutoComponent {

}
