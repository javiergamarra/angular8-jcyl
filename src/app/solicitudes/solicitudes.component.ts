import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  template: `
    <section class="section">
      <div class="container">
        <table class="table is-striped is-hoverable">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let solicitud of solicitudes"
              (click)="seleccionarSolicitud(solicitud)"
            >
              <td>{{ solicitud.nombre }}</td>
              <td>{{ solicitud.apellidos }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <app-solicitud
      [solicitud]="solicitud"
      (solicitudEliminada)="eliminar($event)"
    ></app-solicitud>
  `,
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitudes = [
    {
      nombre: 'Luis',
      apellidos: 'Fraile',
      nacimiento: new Date()
    },
    {
      nombre: 'Javier',
      apellidos: 'Gamarra'
    }
  ];

  solicitud;

  seleccionarSolicitud(solicitud) {
    this.solicitud = solicitud;
  }

  eliminar($event) {
    this.solicitudes.splice(this.solicitudes.indexOf($event), 1);
  }

  constructor() {}

  ngOnInit() {}
}
