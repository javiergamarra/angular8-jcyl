import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatoService {
  constructor(private client: HttpClient) {}

  getHechos() {
    return this.client
      .get('https://cat-fact.herokuapp.com/facts')
      .toPromise()
      .then(json => json['all']);
  }
}
