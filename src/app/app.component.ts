import { UsuarioService } from './usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jcyl';

  constructor(usuarioService: UsuarioService) {
    usuarioService.getUsuario().subscribe(x => console.log(x));
  }
}
