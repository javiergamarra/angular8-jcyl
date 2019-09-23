import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  @Input() solicitud;

  centros = [
    { nombre: 'Fernando de Rojas', id: '09008822' },
    { nombre: 'Agustinas' },
    { nombre: 'Ponce de León' }
  ];

  solicitudEnviada;

  constructor() {}

  enviar(nombre, apellido) {
    console.log('Enviado!', nombre, apellido);
    this.solicitudEnviada = true;
  }

  ngOnInit() {}
}
