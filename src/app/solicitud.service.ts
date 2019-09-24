import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  enviar(nombre: any, apellidos: any) {
    const accessToken = 'CFPAT-_buDegvY8bJBhvaO59OusOZ1gmTdsVm_anOM-uBv1ho';
    return this.httpClient
      .post(
        `https://api.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`,
        JSON.stringify({
          fields: {
            nombre: {
              'en-US': nombre
            },
            apellidos: { 'en-US': apellidos }
          }
        }),
        {
          headers: {
            'X-Contentful-Content-Type': 'solicitud',
            'Content-Type': 'application/vnd.contentful.management.v1+json'
          }
        }
      )
      .toPromise()
      .then((data: any) => {
        let entryId = data.sys.id;
        return this.httpClient
          .put(
            `https://api.contentful.com/spaces/im9x7su136k8/environments/master/entries/${entryId}/published?access_token=${accessToken}`,
            '',
            { headers: { 'X-Contentful-Version': '1' } }
          )
          .toPromise();
      });
  }

  constructor(private httpClient: HttpClient) {}
}
