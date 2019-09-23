import { SolicitudService } from './../solicitud.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  template: `
    <section class="section">
      <div class="container">
        <h1 class="title">
          Solicitud de comedor
        </h1>
        <p class="subtitle">
          Nueva solicitud
        </p>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="Nombre"
              value="{{ solicitud?.nombre }}"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Apellidos</label>
          <div class="control">
            <input
              (keyup)="actualizaApellidos(apellidos.value)"
              class="input"
              [class.is-danger]="!solicitud?.apellidos.length"
              type="text"
              #apellidos
              placeholder="Apellidos"
              value="{{ solicitud?.apellidos }}"
            />
            <p *ngIf="!solicitud?.apellidos.length" class="help is-danger">
              Los apellidos no pueden ser nulos
            </p>
          </div>
        </div>

        <app-filtro-centro></app-filtro-centro>

        <div class="field">
          <label class="label">Fecha de nacimiento</label>
          <div class="control">
            <input
              class="input"
              type="text"
              [value]="solicitud?.nacimiento | date"
            />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" (click)="enviar(solicitud)">
              Enviar
            </button>
          </div>
          <div class="control">
            <button class="button is-danger" (click)="eliminar()">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  @Input()
  solicitud: any = {};

  @Output()
  solicitudEliminada: EventEmitter<any> = new EventEmitter();

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit() {}

  eliminar() {
    this.solicitudEliminada.emit(this.solicitud);
  }

  enviar(solicitud: any) {
    this.solicitudService.guardar(solicitud);
  }

  actualizaApellidos(apellidos: any) {
    if (!this.solicitud) {
      this.solicitud = {};
    }
    this.solicitud.apellidos = apellidos;
  }
}
