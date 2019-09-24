import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { FiltroCentroComponent } from './filtro-centro/filtro-centro.component';
import { HttpClientModule } from '@angular/common/http';
import { CuentaBancariaComponent } from './cuenta-bancaria/cuenta-bancaria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    SolicitudesComponent,
    FiltroCentroComponent,
    CuentaBancariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
