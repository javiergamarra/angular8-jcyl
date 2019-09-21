import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitud = {
    nombre: 'Luis',
    apellidos: 'Fraile'
  };

  constructor() {}

  ngOnInit() {
    setInterval(() => (this.solicitud.nombre = '' + Math.random()), 2000);
  }
}
