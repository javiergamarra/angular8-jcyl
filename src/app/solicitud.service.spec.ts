import { TestBed } from '@angular/core/testing';

import { SolicitudService } from './solicitud.service';
import { defer } from 'rxjs';

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('SolicitudService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let solicitudService: SolicitudService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    solicitudService = new SolicitudService(httpClientSpy as any);
    // TestBed.configureTestingModule({ imports: [SharedModule] });
  });

  it('should return expected (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(asyncData(['hola']));

    solicitudService
      .getSolicitudes()
      .then(
        solicitud => expect(solicitud).toEqual(['hola'], 'expected grants'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
