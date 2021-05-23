import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddprodPageRoutingModule } from './addprod-routing.module';

import { AddprodPage } from './addprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddprodPageRoutingModule
  ],
  declarations: [AddprodPage]
})
export class AddprodPageModule {}
