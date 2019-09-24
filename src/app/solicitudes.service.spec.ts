import { TestBed } from '@angular/core/testing';

import { SolicitudesService } from './solicitudes.service';

describe('SolicitudesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitudesService = TestBed.get(SolicitudesService);
    expect(service).toBeTruthy();
  });
});
