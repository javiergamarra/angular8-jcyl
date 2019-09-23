import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

constructor(private httpClient: HttpClient) {

}

  getSolicitudes() {
    const accessToken = 'nfqjH0u0eIqJrRwflHtVxloWMjE9QzKdobteEB5pods';
    return this.httpClient.get(
      `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`)
      .toPromise();
  }
}
