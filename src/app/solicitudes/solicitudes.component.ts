import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  template: `
    <table>
      <tr *ngFor="let solicitud of solicitudes">
        <td>
          {{ solicitud.nombre }}
        </td>
        <td>{{ solicitud.apellidos }}</td>
        <td>
          {{ solicitud.nacimiento | date: 'yyyy' | slice: 1:-2 }}
        </td>
        <td (click)="seleccionarSolicitud(solicitud)">Editar</td>
        <td>
          <a [routerLink]="'/solicitud/' + solicitud.nombre">Solicitud</a>
        </td>
      </tr>
    </table>
  `,
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitudes = [
    { nombre: 'Javier', apellidos: 'asds', nacimiento: new Date() },
    { nombre: 'Jorge', apellidos: '234' }
  ];
  solicitudSeleccionada;

  constructor() {}

  ngOnInit() {}

  seleccionarSolicitud(solicitud) {
    this.solicitudSeleccionada = solicitud;
    console.log(this.solicitudSeleccionada);
  }
}
