import { LoginGuard } from './login.guard';
import { CuentaBancariaComponent } from './cuenta-bancaria/cuenta-bancaria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

const routes: Routes = [
  { path: 'solicitud/:id', component: SolicitudComponent },
  {
    path: 'solicitudes',
    component: SolicitudesComponent,
    canActivate: [LoginGuard]
  },
  { path: 'cuentabancaria', component: CuentaBancariaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
