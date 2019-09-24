import { FormsModule } from '@angular/forms';
import { SolicitudComponent } from './solicitud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCentroComponent } from '../filtro-centro/filtro-centro.component';

@NgModule({
  declarations: [SolicitudComponent, FiltroCentroComponent],
  imports: [CommonModule, FormsModule]
})
export class SolicitudModule {}
