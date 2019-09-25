import { GatoService } from './gato.service';
import { SolicitudService } from './solicitud.service';
import { CentrosService } from './centros.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of, fromEvent } from 'rxjs';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-jcyl';

  @ViewChild('filtrado', { static: true }) filter: ElementRef;

  enviar(nombre, apellidos) {
    console.log(nombre, apellidos);
    this.solicitudServicio.enviar(nombre, apellidos).then(data => {
      console.log(data);

      // this.listadoCentros.push({ nombre: nombre, apellidos: apellidos });
    });
  }

  listadoCentros$;

  constructor(
    private servicio: CentrosService,
    private gatoServicio: GatoService,
    private solicitudServicio: SolicitudService
  ) {}

  gatos;

  ngOnInit() {
    this.gatoServicio.getHechos().then(data => (this.gatos = data));

    // devuelven promesas
    // devuelven observables => fuente Rx

    // of(2)
    //   .pipe(map(x => x * 2))
    //   .subscribe(x => console.log(x));

    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        map((x: any) => x.target.value),
        filter(x => x.length > 3),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(filtrado => this.servicio.getCentros(filtrado))
      )
      .subscribe(x => console.log(x));

    // this.listadoCentros$ = this.servicio.getCentros();

    // for (let centro of this.listadoCentros$) {
    // }
    // .then(solicitudes => {
    //   this.listadoCentros = solicitudes;
    // });
  }

  mostrar(sdafsadf) {
    console.log('Padre', sdafsadf);
  }
}
