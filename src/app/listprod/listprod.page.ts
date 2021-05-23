import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listprod',
  templateUrl: './listprod.page.html',
  styleUrls: ['./listprod.page.scss'],
})
export class ListprodPage implements OnInit {
public prod: any;
  inf: any;
  filt: any;
  constructor(public afDB: AngularFireDatabase) { 
    this.prod = this.afDB.list('/Product').valueChanges();
    this.prod.subscribe( valueOfItems => {
  })
  }
  list() {
      console.log('filter',this.filt);
      this.inf = this.afDB.list('/Products',  ref => ref.orderByChild('nom').equalTo(this.filt)).valueChanges();
      this.inf.subscribe( valueOfItems => {
        console.log('filt',valueOfItems);
  
  });
}

  ngOnInit() {
  }

}
