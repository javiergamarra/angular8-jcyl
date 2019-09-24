import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentrosService {
  constructor(private httpClient: HttpClient) {}

  getCentros() {
    const accessToken = 'nfqjH0u0eIqJrRwflHtVxloWMjE9QzKdobteEB5pods';
    return this.httpClient
      .get(
        `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`
      )
      .toPromise()
      .then(x => {
        console.log(x);
        return x;
      })
      .then(data => {
        console.log(data);
        let items = data['items'];

        let solicitudes = [];
        for (let item of items) {
          solicitudes.push(item.fields);
        }
        return solicitudes;
      });
  }

  // const promisify = x =>
  //     new Promise((resolve, reject) => setTimeout(() => resolve(x), 2000));

  // promisify('Hola')
  //   .then(x => promisify(x))
  //   .then(x => promisify(x))
  //   .then(x => console.log(x));

  // setTimeout(() => {
  //   setTimeout(() => {
  //     setTimeout(() => {
  //       console.log('Hola');
  //     }, 2000);
  //   }, 2000);
  // }, 2000);

  // //1)
  // http
  //   .getCentros()
  //   .then(centros => {
  //     return http.getProvincias();
  //   })
  //   .then(provincias => {
  //     return x;
  //   })
  //   .catch(err => {});
  // //2)
  // !NO HAY CENTROS
  // return ['Fernando de Rojas', 'Ponce de León', 'Agustinas'];
}
