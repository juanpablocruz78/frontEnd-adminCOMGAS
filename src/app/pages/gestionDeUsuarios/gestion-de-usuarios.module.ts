import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionDeUsuariosComponent } from './gestion-de-usuarios.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    GestionDeUsuariosComponent
  ],
  exports: [
    GestionDeUsuariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SharedModule
  ]
})
export class GestionDeUsuariosModule { }
