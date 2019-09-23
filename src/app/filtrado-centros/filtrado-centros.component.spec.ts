import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoCentrosComponent } from './filtrado-centros.component';

describe('FiltradoCentrosComponent', () => {
  let component: FiltradoCentrosComponent;
  let fixture: ComponentFixture<FiltradoCentrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltradoCentrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradoCentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
