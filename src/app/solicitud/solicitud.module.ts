import { FormsModule } from '@angular/forms';
import { SolicitudComponent } from './solicitud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCentroComponent } from '../filtro-centro/filtro-centro.component';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  declarations: [SolicitudComponent, FiltroCentroComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SolicitudModule {}
