import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitudes = [
    {
      nombre: 'Luis',
      apellidos: 'Fraile'
    },
    {
      nombre: 'Javier',
      apellidos: 'Gamarra'
    }
  ];

  solicitud = {
    nombre: 'Luis',
    apellidos: 'Fraile'
  };

  constructor() {}

  ngOnInit() {}

  enviar(solicitud: any) {
    console.log(solicitud);
  }

  actualizaApellidos(apellidos: any) {
    this.solicitud.apellidos = apellidos;
  }
}
