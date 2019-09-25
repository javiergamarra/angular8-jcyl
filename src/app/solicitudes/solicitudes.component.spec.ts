import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesComponent } from './solicitudes.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

describe('SolicitudesComponent', () => {
  let component: SolicitudesComponent;
  let fixture: ComponentFixture<SolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudesComponent],
      imports: [SharedModule, RouterModule.forRoot([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
