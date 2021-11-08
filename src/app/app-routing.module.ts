import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GestionDeUsuariosRoutingModule } from './pages/gestionDeUsuarios/gestion-de-usuarios.routing';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes = [

  // path: '/GestionDeUsuario' GestionDeUsuariosRouting
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  { path: 'GestionDeUsuario', 
  loadChildren: () => import('./pages/gestionDeUsuarios/gestion-de-usuarios.module').then( m => m.GestionDeUsuariosModule ) },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GestionDeUsuariosRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
