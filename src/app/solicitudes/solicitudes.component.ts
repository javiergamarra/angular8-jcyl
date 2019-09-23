import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SolicitudService } from '../solicitud.service';
import { fromEvent } from 'rxjs';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  template: `
    <section class="section">
      <div class="container">
        <input #filter />

        <table class="table is-striped is-hoverable">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let solicitud of solicitudes$ | async"
              (click)="seleccionarSolicitud(solicitud)"
            >
              <td>{{ solicitud.nombre }}</td>
              <td>{{ solicitud.apellidos }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
})
export class SolicitudesComponent implements OnInit {
  constructor(
    private solicitudService: SolicitudService,
    private router: Router
  ) {}
  solicitudes$;

  solicitud;

  @ViewChild('filter', { static: true }) filter: ElementRef;

  seleccionarSolicitud(solicitud) {
    this.solicitud = solicitud;
    this.router.navigate(['solicitud', solicitud.nombre]);
  }

  eliminar($event) {
    this.solicitudes$.splice(this.solicitudes$.indexOf($event), 1);
  }

  ngOnInit() {
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(x => this.solicitudService.getSolicitudes())
      )
      .subscribe(x => console.log(x));

    this.solicitudes$ = this.solicitudService
      .getSolicitudes()
      .then((x: any) => x.items.map(y => y.fields));
  }
}
