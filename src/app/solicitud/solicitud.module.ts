import { SolicitudComponent } from './solicitud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCentroComponent } from '../filtro-centro/filtro-centro.component';

@NgModule({
  declarations: [SolicitudComponent, FiltroCentroComponent],
  imports: [CommonModule]
})
export class SolicitudModule {}
