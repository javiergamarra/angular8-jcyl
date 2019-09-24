import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

    Centro seleccionado:
    {{ centroSeleccionado }}
  `,
  styleUrls: ['./filtrado-centros.component.css']
})
export class FiltradoCentrosComponent implements OnInit {
  @Input() centros;
  centrosAFiltrar;
  centroSeleccionado;
  @Output() centroAEmitir = new EventEmitter();

  filtrar(centroAFiltrar) {
    this.centrosAFiltrar = this.centros.filter(
      centro =>
        centro.toLowerCase().indexOf(centroAFiltrar.toLowerCase()) !== -1
    );
  }

  seleccionarCentro(centro) {
    this.centroSeleccionado = centro;

    this.centroAEmitir.emit(centro);
  }

  constructor() {}

  ngOnInit(): void {}
}
