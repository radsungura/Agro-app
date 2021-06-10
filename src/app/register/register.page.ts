import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
public user : any;
  constructor(public router: Router,public afDB: AngularFireDatabase) { 
    this.user = {}
  }
  creatuser(user){
    let date = new Date()
    console.log('date',date);
    this.afDB.list('User/').push({
        'created' : date,
        user
    }
    );
    this.router.navigate(['/login']);

  }
  ngOnInit() {
  }

}
