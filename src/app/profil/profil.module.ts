import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './profil.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProfilPage]
})
export class ProfilPageModule {}
