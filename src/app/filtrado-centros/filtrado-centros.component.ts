import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtrado-centros',
  template: `
    <input
      value="{{ centroSeleccionado }}"
      placeholder="Escribe un centro"
      (keyup)="filtrar($event.target.value)"
    />
    <ul>
      <li
        *ngFor="let centro of centrosAFiltrar"
        (click)="seleccionarCentro(centro)"
      >
        {{ centro }}
      </li>
    </ul>

    Centro seleccionado: {{ centroSeleccionado }}
  `,
  styleUrls: ['./filtrado-centros.component.css']
})
export class FiltradoCentrosComponent {
  centros = ['Fernando de Rojas', 'Ponce de León'];
  centrosAFiltrar;
  centroSeleccionado;

  filtrar(centroAFiltrar) {
    this.centrosAFiltrar = this.centros.filter(
      centro =>
        centro.toLowerCase().indexOf(centroAFiltrar.toLowerCase()) !== -1
    );
  }

  seleccionarCentro(centro) {
    this.centroSeleccionado = centro;
  }
}
