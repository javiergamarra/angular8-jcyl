import { SolicitudService } from './solicitud.service';
import { CentrosService } from './centros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-jcyl';

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
    private solicitudServicio: SolicitudService
  ) {}

  ngOnInit() {
    this.listadoCentros$ = this.servicio.getCentros();

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
