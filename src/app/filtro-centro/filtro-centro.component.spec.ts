import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCentroComponent } from './filtro-centro.component';

describe('FiltroCentroComponent', () => {
  let component: FiltroCentroComponent;
  let fixture: ComponentFixture<FiltroCentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroCentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
