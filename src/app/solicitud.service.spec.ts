import { TestBed } from '@angular/core/testing';

import { SolicitudService } from './solicitud.service';
import { SharedModule } from './shared/shared.module';

describe('SolicitudService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [SharedModule] }));

  it('should be created', () => {
    const service: SolicitudService = TestBed.get(SolicitudService);
    expect(service).toBeTruthy();
  });
});
