import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  accessToken = 'nCzyj1PEG8PWPycjnjhtvOcdE29Bmu3MGph0dk-USps';

  guardar(solicitud: any) {
    const accessToken = 'CFPAT-_buDegvY8bJBhvaO59OusOZ1gmTdsVm_anOM-uBv1ho';
    return this.httpClient
      .post(
        `https://api.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`,
        JSON.stringify({
          fields: {
            nombre: {
              'en-US': solicitud.nombre
            },
            apellidos: {
              'en-US': solicitud.apellidos
            }
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
      .then((json: any) => {
        let entryId = json.sys.id;
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

  getSolicitudes() {
    return this.httpClient
      .get(
        `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${this.accessToken}&content_type=solicitud`
      )
      .toPromise();
  }
}
