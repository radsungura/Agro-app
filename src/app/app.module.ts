import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
var firebaseConfig = {
  apiKey: "AIzaSyB0Ck1lqSnc1JAqLVXT_pCqqI1YP-TZaX8",
  authDomain: "e-rad-bf16e.firebaseapp.com",
  databaseURL: "https://e-rad-bf16e-default-rtdb.firebaseio.com",
  projectId: "e-rad-bf16e",
  storageBucket: "e-rad-bf16e.appspot.com",
  messagingSenderId: "50893829833",
  appId: "1:50893829833:web:3395c5dd23e15ad7d83f18",
  measurementId: "G-V4ZQM22T20"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
