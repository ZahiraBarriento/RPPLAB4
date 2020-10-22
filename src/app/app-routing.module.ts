import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { MovesComponent } from './moves/moves.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listado', component: ListadoComponent, },
  { path: 'detalle/:pokemon', component: DetalleComponent},
  { path: 'moves/:pokemon', component: MovesComponent},
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
