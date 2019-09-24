import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta-bancaria',
  templateUrl: './cuenta-bancaria.component.html',
  styleUrls: ['./cuenta-bancaria.component.css']
})
export class CuentaBancariaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  submit(f) {
    console.log(f);

    if (f.controls.DigitoControl.errors) {
      console.log(f.controls.DigitoControl.errors);
    }
  }
}
