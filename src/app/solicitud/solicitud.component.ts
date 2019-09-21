import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitud = {
    nombre: 'Luis',
    apellidos: 'Fraile',
    error: false
  };

  constructor() {}

  ngOnInit() {}

  enviar() {
    console.log('Enviado!');
  }
}
