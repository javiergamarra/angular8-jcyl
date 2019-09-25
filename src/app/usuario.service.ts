import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

export class Usuario {
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private currentUser: Subject<Usuario> = new BehaviorSubject<Usuario>(null);

  login(usuario: any, password: any) {
    this.currentUser.next(usuario);
  }

  getUsuario() {
    return this.currentUser.asObservable();
  }

  constructor() {}
}
