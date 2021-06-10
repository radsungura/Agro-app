import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { AngularFireStorage, createStorageRef } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { IonApp } from '@ionic/angular';

@Component({
  selector: 'app-listprod',
  templateUrl: './listprod.page.html',
  styleUrls: ['./listprod.page.scss'],
})
export class ListprodPage implements OnInit {
public prod: any;
  inf: any;
  filt: any;
  photo: any;
  image: any;
  fil = [];
  constructor( private iab: IonApp , public firebaseAuthService: FirebaseAuthService, public fireAuth: AngularFireAuth,public afDB: AngularFireDatabase, public afs: AngularFireStorage) { 
    this.prod = this.afDB.list('/prod').valueChanges();
    this.prod.subscribe( valueOfItems => {
      console.log(valueOfItems);
  });
  
  }
  list() {
      console.log('filter',this.filt);
      this.inf = this.afDB.list('/Product',  ref => ref.orderByChild('nom').equalTo(this.filt)).valueChanges();
      this.inf.subscribe( valueOfItems => {
        console.log('filt',valueOfItems);
  
  });
}
logout() {
  this.firebaseAuthService.logout()
}
getImagesStorage(image: any) {
  const imgRef = image.payload.exportVal().ref;
  this.afs.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
    
    this.image.push({
      name: image.payload.exportVal().name,
      url: imgUrl
    });
  });
  console.log(imgRef);
}
getImagesDatabase() {
  this.afDB.list('prod').snapshotChanges(['child_added']).subscribe(images => {
    images.forEach(image => {
      this.getImagesStorage(image);
    });
  });
}
getimage(){
this.fil = [];
const pictureRef = this.afs.ref('uploads');
pictureRef.listAll().subscribe(result => {
  result.items.forEach(async ref => {
    this.fil.push({
      name: ref.name,
      full: ref.fullPath,
      ref,
      url: await ref.getDownloadURL()
    })
  });
  console.log(this.fil);
})
}

deletfil(ref){
  ref.delete().then(() => {
    this.getimage();
  });
}


  ngOnInit() {
  }

}
