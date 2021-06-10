import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { FirebaseUploadService } from '../services/firebase-upload.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
public user: any;
  constructor(private firebaseAuthService: FirebaseAuthService, public firebaseUploadService: FirebaseUploadService) { }

  ngOnInit() {
    this.user = this.firebaseAuthService.getUser();
    console.log(this.user);
  }
  signOut() {
    this.firebaseAuthService.logmout();
  }
  

}
