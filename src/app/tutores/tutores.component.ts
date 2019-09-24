import { Component, OnInit } from '@angular/core';

enum TIPO_DOCUMENTO {
  DNI = 'DNI',
  NIE = 'NIE',
  OTROS = 'Otros'
}

enum RELACION {
  PADRE = 'Padre',
  MADRE = 'Madre',
  TUTOR = 'Tutor'
}

interface Tutor {
  nombre: string;
  apellido1: string;
  apellido2?: string;
  documento: string;
  tipoDocumento: TIPO_DOCUMENTO;
  relacion: RELACION;
}

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})
export class TutoresComponent implements OnInit {
  tutores: Tutor[] = [
    {
      nombre: 'Jorge',
      apellido1: 'Gamarra',
      apellido2: 'Olmedo',
      documento: '71111111E',
      tipoDocumento: TIPO_DOCUMENTO.DNI,
      relacion: RELACION.TUTOR
    }
  ];

  constructor() {}

  ngOnInit() {}

  nuevoTutor() {
    this.tutores.push({
      nombre: '',
      apellido1: '',
      documento: '',
      tipoDocumento: TIPO_DOCUMENTO.DNI,
      relacion: RELACION.TUTOR
    });
  }
}
