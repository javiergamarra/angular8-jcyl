import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  getSolicitudes() {
    return [
      {
        nombre: 'Luis',
        apellidos: 'Fraile',
        nacimiento: new Date()
      },
      {
        nombre: 'Javier',
        apellidos: 'Gamarra'
      }
    ];
  }
}
