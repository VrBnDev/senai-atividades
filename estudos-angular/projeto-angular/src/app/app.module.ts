import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";

/* Material Angular */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from "./app-routing.module"; 

@NgModule({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatSlideToggleModule
    ],
    providers:[],
    bootstrap: []
})

export class AppModule {}