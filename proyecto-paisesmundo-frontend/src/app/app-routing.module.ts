import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinenteComponent } from './components/continente/continente.component';
import { HabitanteComponent } from './components/habitante/habitante.component';
import { HomeComponent } from './components/home/home.component';
import { PaisComponent } from './components/pais/pais.component';

const appRoutes: Routes =  [
  { path: 'continent', component: ContinenteComponent },
  { path: 'pais', component: PaisComponent },
  { path: 'habitante', component: HabitanteComponent },
  { path: 'home', component: HomeComponent },
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
