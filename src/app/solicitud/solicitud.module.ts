import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltradoCentrosComponent } from './../filtrado-centros/filtrado-centros.component';
import { SolicitudComponent } from './solicitud.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'new',
    component: SolicitudComponent
  },
  {
    path: ':id',
    component: SolicitudComponent
  }
];

@NgModule({
  declarations: [SolicitudComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [SolicitudComponent]
})
export class SolicitudModule {}
