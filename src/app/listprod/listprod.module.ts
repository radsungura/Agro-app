import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListprodPageRoutingModule } from './listprod-routing.module';

import { ListprodPage } from './listprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListprodPageRoutingModule
  ],
  declarations: [ListprodPage]
})
export class ListprodPageModule {}
