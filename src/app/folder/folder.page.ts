import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public info: any;
  public inf: any;
  public user: any;
  public pass: any;
  constructor(public afDB: AngularFireDatabase,private activatedRoute: ActivatedRoute) {
    this.info = {}
    this.inf = afDB.list('/User',  ref => ref.orderByChild('password').equalTo('dido')).valueChanges();
    this.inf.subscribe( valueOfItems => {
        console.log(valueOfItems);
    }) }
  add(info) {
    this.inf = this.afDB.list('/User',  ref => ref.orderByChild('password').equalTo(info.pass)).valueChanges();
    this.inf.subscribe( valueOfItems => {
      console.log(valueOfItems);
  })
  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
