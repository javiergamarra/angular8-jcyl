import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { CuentaBancariaComponent } from './cuenta-bancaria/cuenta-bancaria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudModule } from './solicitud/solicitud.module';

@NgModule({
  declarations: [AppComponent, SolicitudesComponent, CuentaBancariaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SolicitudModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
