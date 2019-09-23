import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';
import { of } from 'rxjs';

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
  `,
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitudes = [];

  solicitud;

  seleccionarSolicitud(solicitud) {
    this.solicitud = solicitud;
  }

  eliminar($event) {
    this.solicitudes.splice(this.solicitudes.indexOf($event), 1);
  }

  constructor(private solicitudService: SolicitudService) {
    of(2).subscribe(x => console.log(x));
  }

  ngOnInit() {
    this.solicitudService
      .getSolicitudes()
      .then((x: any) => x.items.map(y => y.fields))
      .then(x => (this.solicitudes = x));
  }
}
