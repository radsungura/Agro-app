import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  log: any;

  constructor(public afAuth: AngularFireAuthModule , public afDB: AngularFireDatabase, private router: Router, public navCtrl: NavController  ){
    this.log = {}
    }
    add(log){
      this.afDB.list('User/').push({
          'nom' :log.user,
          'password' :log.pass
      }
      );}
      show(log){
        const res = this.log;
        }
        
ngOnInit(){
  }

}
