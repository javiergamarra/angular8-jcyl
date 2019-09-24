import { SolicitudComponent } from './solicitud.component';
import { NgModule } from '@angular/core';
import { FiltroCentroComponent } from '../filtro-centro/filtro-centro.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '2', component: SolicitudComponent },
  { path: 'new', component: SolicitudComponent }
];

@NgModule({
  declarations: [SolicitudComponent, FiltroCentroComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class SolicitudModule {}
