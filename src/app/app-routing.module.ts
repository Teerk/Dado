import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DadoComponent} from './dado/dado.component';

import {AcercadeComponent} from './acercade/acercade.component';

const routes: Routes = [
  {
    path:'dados',
    component:DadoComponent
  },
  {
    path:'acercade',
    component:AcercadeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
