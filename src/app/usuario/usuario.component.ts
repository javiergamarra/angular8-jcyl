import { Usuario } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction } from '../usuariostore/usuario-store';

@Component({
  selector: 'app-usuario',
  template: `
    <input #usuario />

    <input #password />
    <button (click)="login(usuario.value, password.value)">Login</button>
  `,
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  constructor(private store: Store<Usuario>) {}

  ngOnInit() {}

  login(usuario, password) {
    this.store.dispatch(new LoginAction('Jorge'));
  }
}
