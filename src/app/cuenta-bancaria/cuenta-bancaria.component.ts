import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuenta-bancaria',
  templateUrl: './cuenta-bancaria.component.html',
  styleUrls: ['./cuenta-bancaria.component.css']
})
export class CuentaBancariaComponent implements OnInit {
  f;
  entidadControl = new FormControl('', [Validators.required, this.myValidator]);
  sucursalControl = new FormControl('', Validators.required);
  digitoControlControl = new FormControl('', Validators.required);

  constructor(private formsBuilder: FormBuilder) {
    this.f = formsBuilder.group({
      entidad: this.entidadControl,
      sucursal: this.sucursalControl,
      digitoControl: this.digitoControlControl
    });
  }

  ngOnInit() {
    this.entidadControl.valueChanges.subscribe(x => console.log(x));
  }

  myValidator(control: FormControl) {
    if (control.value === '0000') {
      return { invalidName: true };
    }
  }

  submit() {
    console.log(this.entidadControl.errors);
  }
}
