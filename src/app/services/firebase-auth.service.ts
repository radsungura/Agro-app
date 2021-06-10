import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(public angularFireAuth: AngularFireAuth, public router: Router) { }
  firebaseSocialLogin(provider: any){
this.angularFireAuth.signInWithPopup(provider).then((res: any)=>{
  console.log(res.user);
  if(res.user){
    localStorage.setItem('user', JSON.stringify(res.user));
    this.router.navigate(['/listprod']);
  }
})
  }
  googlelogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.firebaseSocialLogin(provider);
  }
  logout(){
   this.angularFireAuth.signOut();
   localStorage.setItem('user', null);
   localStorage.removeItem('user');
   this.router.navigate(['login'])
  }
  getUser(){
   const userData = localStorage.getItem('user');
   return JSON.parse(userData);
   console.log(userData);
  }
  
  login(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/profil');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Sucess', value);
     this.router.navigateByUrl('/login');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }
  logmout() {
    this.angularFireAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

}
