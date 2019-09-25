import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuenta-bancaria',
  template: `
    <form [formGroup]="formulario">
      <mat-form-field>
        <input
          matInput
          [matDatepicker]="picker"
          placeholder="date"
          (dateInput)="log($event)"
        />
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>

      <label>Entidad</label>
      <input
        name="entidad"
        minlength="4"
        required
        maxlength="4"
        [formControl]="formulario.controls.entidad"
      />

      {{ formulario.value | json }}

      <label>Sucursal</label>
      <input
        name="sucursal"
        required
        [formControl]="formulario.controls.sucursal"
      />
      <label>DC</label>
      <input name="dc" [formControl]="formulario.controls.dc" />
      <label>Cuenta</label>
      <input name="cuenta" [formControl]="formulario.controls.cuenta" />

      <button (click)="enviar()">Enviar</button>
    </form>
  `,
  styleUrls: ['./cuenta-bancaria.component.css']
})
export class CuentaBancariaComponent implements OnInit {
  formulario;

  entidad = new FormControl('0000', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      entidad: this.entidad,
      sucursal: '',
      dc: '',
      cuenta: ''
    });
  }

  ngOnInit() {
    this.entidad.valueChanges.subscribe(x => console.log(x));
  }

  enviar() {
    console.log(this.formulario);
  }
}
