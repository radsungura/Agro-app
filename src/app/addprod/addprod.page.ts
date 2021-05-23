import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.page.html',
  styleUrls: ['./addprod.page.scss'],
})
export class AddprodPage implements OnInit {
public prod : any;
  constructor( public afDB: AngularFireDatabase, public router: Router) { 
    this.prod = {}
  }
addprod(prod){
  console.log(prod);
  this.afDB.list('Products/').push({
    'nom' :prod.article,
    'qty' :prod.qty,
    'desc' :prod.desc,
    'cat' :prod.cat,
    'prix' :prod.prix,
    'etat' :prod.etat,
    'adress' :prod.adress,
    'photo' :prod.photo
});
this.afDB.list('Product/').push({
  'created' : Date.now(),
  prod
});
this.router.navigate(['/listprod']);
 }
  ngOnInit() {
  }

}
