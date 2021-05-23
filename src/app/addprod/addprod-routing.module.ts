import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddprodPage } from './addprod.page';

const routes: Routes = [
  {
    path: '',
    component: AddprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddprodPageRoutingModule {}
