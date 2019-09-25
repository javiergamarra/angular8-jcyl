import { SolicitudComponent } from './solicitud/solicitud.component';
import { Store } from '@ngrx/store';
import { Usuario } from './usuario.service';
import {
  Component,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { LogoutAction } from './usuariostore/usuario-store';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jcyl';

  @ViewChild('parent', { read: ViewContainerRef, static: true })
  inject: ViewContainerRef;

  constructor(
    private store: Store<Usuario>,
    private resolver: ComponentFactoryResolver
  ) {}

  logout() {
    this.inject.createComponent(
      this.resolver.resolveComponentFactory(SolicitudesComponent)
    );
    this.store.dispatch(new LogoutAction());
  }
}
