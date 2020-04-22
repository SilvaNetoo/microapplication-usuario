import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';



@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsuarioRoutingModule
  ],
  providers: [],
  bootstrap: [UsuarioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsuarioModule { }
