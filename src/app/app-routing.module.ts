import { UsuarioComponent } from './usuario/usuario.component';
import { LoginGuard } from './login.guard';
import { CuentaBancariaComponent } from './cuenta-bancaria/cuenta-bancaria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ConcesionariaComponent } from './concesionaria/concesionaria.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'solicitud',
    loadChildren: () =>
      import('./solicitud/solicitud.module').then(m => m.SolicitudModule)
  },
  { path: 'cuentabancaria', component: CuentaBancariaComponent },
  { path: 'concesionaria', component: ConcesionariaComponent },
  { path: 'login', component: UsuarioComponent },
  { path: '*', component: SolicitudesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
