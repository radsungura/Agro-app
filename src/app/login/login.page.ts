import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import firebase from "firebase/app";
import "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  log: any;
  inf: any;
  users: any;
  user = null;

  constructor(public fireAuth: AngularFireAuth, public firebaseAuthService: FirebaseAuthService, public afAuth: AngularFireAuthModule , public afDB: AngularFireDatabase, private router: Router, public navCtrl: NavController  ){
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user : null;
    }),
    this.log = {},
    this.inf = {}
    }
      add(log) {
      let v = false;
        this.inf = this.afDB.list('/User').valueChanges();
        this.inf.subscribe( valueOfItems => {
          for (let i = 0; i < valueOfItems.length; i++) {
            const element = valueOfItems[i];
            if (log.user === element.user.email) {
              this.router.navigate(['/listprod']);
              window.sessionStorage.session = element.item.user ;
              localStorage.setItem('token', element.item.user);
              v = true;
            }}
          if (!v){ alert('nom d utilisateur ou mot de passe incorrect'); }
  
      })
      }
      onSubmit(log) {
        if (log) {
          console.log(log);
          this.firebaseAuthService.login(
            log.email,
            log.password
          );
        }
      }
ngOnInit(){
  }

}
