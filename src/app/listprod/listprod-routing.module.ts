import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListprodPage } from './listprod.page';

const routes: Routes = [
  {
    path: '',
    component: ListprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListprodPageRoutingModule {}
