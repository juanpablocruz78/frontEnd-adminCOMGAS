import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GestionDeUsuariosComponent } from './gestion-de-usuarios.component';
import { GestionDeUsuarioListarComponent } from './gestionDeUsuario/gestion-de-usuario-listar/gestion-de-usuario-listar.component';

const routes: Routes = [

    {
        path: 'GestionDeUsuario',
        component: GestionDeUsuariosComponent,
        children: [
            { path: '', component: GestionDeUsuarioListarComponent}
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GestionDeUsuariosRoutingModule {}
