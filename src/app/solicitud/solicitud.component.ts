import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  @Input()
  solicitud;

  constructor() {}

  ngOnInit() {}

  enviar(solicitud: any) {
    console.log(solicitud);
  }

  actualizaApellidos(apellidos: any) {
    this.solicitud.apellidos = apellidos;
  }
}
