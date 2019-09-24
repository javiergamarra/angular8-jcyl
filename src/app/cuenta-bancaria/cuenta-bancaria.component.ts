import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cuenta-bancaria',
  templateUrl: './cuenta-bancaria.component.html',
  styleUrls: ['./cuenta-bancaria.component.css']
})
export class CuentaBancariaComponent implements OnInit {
  ngOnInit() {}

  f;

  constructor(private formsBuilder: FormBuilder) {
    this.f = formsBuilder.group({
      Entidad: '',
      Sucursal: '',
      DigitoControl: ''
    });
  }

  submit() {
    if (this.f.controls.DigitoControl.errors) {
      console.log(this.f.controls.DigitoControl.errors);
    }
  }
}
