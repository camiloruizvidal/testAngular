import { MotoComponent } from './moto/moto.component';
import { CarroComponent } from './carro/carro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'carro', component: CarroComponent},
  {path: 'moto', component: MotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
