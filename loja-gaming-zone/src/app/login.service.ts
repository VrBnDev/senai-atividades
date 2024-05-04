import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostrarMenu = new Subject<boolean>();

  constructor() { }

  login(usuario:string, senha:string):void{
    if(usuario=='aluno'&& senha=='123456'){
      localStorage.setItem('token','quer123456');
      this.mostrarMenu.next(false);
    }
    else{
      this.mostrarMenu.next(true);
    }
  }

  setMostraMenu(value:boolean){
    this.mostrarMenu.next(value);
  }

  getMostraMenu(){
    return this.mostrarMenu.asObservable();
  }

}
