import { TestBed } from '@angular/core/testing';

import { GatoService } from './gato.service';

describe('GatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GatoService = TestBed.get(GatoService);
    expect(service).toBeTruthy();
  });
});
