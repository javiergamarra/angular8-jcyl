import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, last } from 'rxjs/operators';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  @Input() solicitud = { nombre: '', apellido: '' };

  centros = [
    { nombre: 'Fernando de Rojas', id: '09008822' },
    { nombre: 'Agustinas' },
    { nombre: 'Ponce de León' }
  ];

  solicitudEnviada;

  constructor(private route: ActivatedRoute) {
    setInterval(() => (this.solicitud.nombre = Math.random() + ''), 3000);
  }

  enviar() {
    console.log('Enviado!', this.solicitud.nombre, this.solicitud.apellido);
    this.solicitudEnviada = true;
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(x => console.log(x));
    //   let obs = this.route.params;
    //   obs.subscribe(
    //     x => console.log('Obs 1', x),
    //     err => console.log(err),
    //     () => console.log('Finished!')
    //   );

    this.route.params
      .pipe(first())
      .toPromise()
      .then(x => console.log('Promise', x))
      .catch(x => console.error(x));
  }
}
