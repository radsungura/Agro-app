import { Component, OnInit } from '@angular/core';
import { FirebaseUploadService } from 'src/app/services/firebase-upload.service';

@Component({
  selector: 'app-photos-upload',
  templateUrl: './photos-upload.component.html',
  styleUrls: ['./photos-upload.component.scss'],
})
export class PhotosUploadComponent implements OnInit {
  barStatus = false;
  imageUploads = [];

  constructor(private firebaseUploadService: FirebaseUploadService) { }

  ngOnInit() {}
  uploadPhoto(event){
    this.barStatus = true;
    this.firebaseUploadService.storeImage(event.target.files[0]).then((res: any)=>{
      if (res) {
        this.barStatus = false;
        this.imageUploads.unshift(res);
      }
    },(error: any) => {
      this.barStatus = false;
    });
  }

}
