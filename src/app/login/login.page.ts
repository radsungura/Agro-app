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
  inf: any;
  users: any;

  constructor(public afAuth: AngularFireAuthModule , public afDB: AngularFireDatabase, private router: Router, public navCtrl: NavController  ){
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
      show(log){
        const res = this.log;
        }
        
ngOnInit(){
  }

}
