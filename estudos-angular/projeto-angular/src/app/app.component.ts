import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "./componente1/componente1.component";
import { Componente2Component } from './componente2/componente2.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Componente1Component, Componente2Component, MatSlideToggleModule, MatButtonModule, MatIconModule]
})

export class AppComponent {
  title = 'projeto-angular';
}
