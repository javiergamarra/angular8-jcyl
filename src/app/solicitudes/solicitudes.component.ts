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
        <td (click)="seleccionarSolicitud(solicitud)">Editar</td>
      </tr>
    </table>
  `,
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitudes = [
    { nombre: 'Javier', apellidos: 'asds' },
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
