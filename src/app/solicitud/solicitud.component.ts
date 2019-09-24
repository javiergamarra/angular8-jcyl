import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { first, last } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {}

  enviar(nombre, apellido) {
    console.log('Enviado!', nombre, apellido);
    this.solicitudEnviada = true;
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(x => console.log(x));
    this.route.params
      .pipe(first())
      .toPromise()
      .then(x => console.log(x));
  }
}
