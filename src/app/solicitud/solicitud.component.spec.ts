import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudComponent } from './solicitud.component';
import { SharedModule } from '../shared/shared.module';
import { FiltroCentroComponent } from '../filtro-centro/filtro-centro.component';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SolicitudComponent', () => {
  let component: SolicitudComponent;
  let fixture: ComponentFixture<SolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudComponent, FiltroCentroComponent],
      imports: [SharedModule, RouterModule.forRoot([]), NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture = TestBed.createComponent(SolicitudComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Solicitud de comedor');
  });
});
