import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {}

  login(usuario, password) {
    this.usuarioService.login(usuario, password);
  }
}
