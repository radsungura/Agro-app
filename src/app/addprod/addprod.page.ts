import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage,AngularFireStorageReference } from '@angular/fire/storage';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.page.html',
  styleUrls: ['./addprod.page.scss'],
})
export class AddprodPage implements OnInit {
  selectedFile: any;
  newTodo: string = '';
public prod : any;
items: Observable<any[]>;
itemsRef: AngularFirestoreCollection;
  info: {};
  constructor( public afDB: AngularFireDatabase, public db: AngularFirestore,public storage: AngularFireStorage, public router: Router) { 
    this.prod = {}
    this.info = {}
  }
  choseFile(event){
    
this.selectedFile = event.target.files;

  }
  creatuser(info){
    let date = new Date()
    console.log('date',date);
    this.afDB.list('prod/').push({
        'created' : date,
        'user' : info.user,
        'image' : info.img
    }
    );}
  addTodo(){
    this.itemsRef.add({
      title: this.newTodo
    }).then(async resp =>{
      const imageUrl = await this.uploadFile(resp.id, this.selectedFile)
      this.itemsRef.doc(resp.id).update({
        id: resp.id,
        imageUrl: imageUrl || null
      })
      
    }).catch(error =>{
      console.log(error);
    })
  }
  async uploadFile(id, file): Promise<any> {
    if (file && file.length) {
      try{
        
      const task = await this.storage.ref('images').child(id).put(file[0])
      return this.storage.ref('images/$(id)').getDownloadURL().toPromise();
    }
    catch(error){
      console.log(error);
      
    }
    }

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
 remove(item){}
  ngOnInit() {
  }

}
