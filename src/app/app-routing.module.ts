import { CuentaBancariaComponent } from './cuenta-bancaria/cuenta-bancaria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { AutenticacionGuard } from './autenticacion.guard';

const routes: Routes = [
  {
    path: 'solicitud/:id',
    loadChildren: () =>
      import('./solicitud/solicitud.module').then(x => x.SolicitudModule),
    canActivate: [AutenticacionGuard]
  },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'cuentabancaria', component: CuentaBancariaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
