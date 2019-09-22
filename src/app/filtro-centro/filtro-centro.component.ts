import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-centro',
  template: `
    <div class="field">
      <div class="control">
        <label class="label">Centro</label>
        <input
          (keyup)="filtrar(campoCentro.value)"
          class="input"
          type="text"
          [value]="centro"
          #campoCentro
        />
        <ul *ngIf="centrosFiltrados.length">
          <li
            *ngFor="let centro of centrosFiltrados"
            (click)="seleccionar(centro)"
          >
            {{ centro }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./filtro-centro.component.css']
})
export class FiltroCentroComponent implements OnInit {
  centro = '';
  centrosFiltrados = [];
  centros = ['Fernando de Rojas', 'Agustinas'];

  constructor() {}

  ngOnInit() {}

  filtrar(busqueda: string) {
    this.centrosFiltrados = this.centros.filter(x => {
      return x.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1;
    });
  }

  seleccionar(centro) {
    this.centro = centro;
  }
}
