import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reto20Component } from './principal/reto20/reto20.component';

const routes: Routes = [
  {path:"reto20", component:Reto20Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
