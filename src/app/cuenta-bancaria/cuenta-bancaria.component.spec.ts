import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaBancariaComponent } from './cuenta-bancaria.component';

describe('CuentaBancariaComponent', () => {
  let component: CuentaBancariaComponent;
  let fixture: ComponentFixture<CuentaBancariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaBancariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
