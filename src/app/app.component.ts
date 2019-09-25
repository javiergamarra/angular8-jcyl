import { Store } from '@ngrx/store';
import { Usuario } from './usuario.service';
import { Component } from '@angular/core';
import { LogoutAction } from './usuariostore/usuario-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jcyl';

  constructor(private store: Store<Usuario>) {}

  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
