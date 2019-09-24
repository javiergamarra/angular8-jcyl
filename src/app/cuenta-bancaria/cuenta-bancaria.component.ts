import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuenta-bancaria',
  templateUrl: './cuenta-bancaria.component.html',
  styleUrls: ['./cuenta-bancaria.component.css']
})
export class CuentaBancariaComponent implements OnInit {
  ngOnInit() {}

  f;
  entidadControl = new FormControl('', Validators.required);
  sucursalControl = new FormControl('', Validators.required);
  digitoControlControl = new FormControl('', Validators.required);

  constructor(private formsBuilder: FormBuilder) {
    this.f = formsBuilder.group({
      entidad: this.entidadControl,
      sucursal: this.sucursalControl,
      digitoControl: this.digitoControlControl
    });
  }

  submit() {
    if (this.digitoControlControl.errors) {
      console.log(this.digitoControlControl.errors);
    }
  }
}
