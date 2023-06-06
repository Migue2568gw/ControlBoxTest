import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './vistas/dashboard/dashboard.component'
import {NuevousuarioComponent} from './vistas/nuevousuario/nuevousuario.component'
import {ActualizarComponent} from './vistas/actualizar/actualizar.component'
import {DetalleusuarioComponent} from './vistas/detalleusuario/detalleusuario.component'

const routes: Routes = [
  {path:'',redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'nuevousuario',component:NuevousuarioComponent},
  {path:'actualizar/:id',component:ActualizarComponent},
  {path:'detalleusuario/:id',component:DetalleusuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,NuevousuarioComponent,ActualizarComponent,DetalleusuarioComponent]