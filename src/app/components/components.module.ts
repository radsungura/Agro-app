import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosUploadComponent } from './photos-upload/photos-upload.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PhotosUploadComponent, PhotosListComponent],
  exports: [PhotosUploadComponent, PhotosListComponent],
  
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
