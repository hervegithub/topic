import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC1NKwopXdlg1FU79VoU66dGpnzpMtnCWk",
  authDomain: "topic-cbc59.firebaseapp.com",
  databaseURL: "https://topic-cbc59.firebaseio.com",
  projectId: "topic-cbc59",
  storageBucket: "topic-cbc59.appspot.com",
  messagingSenderId: "195366396911",
  appId: "1:195366396911:web:a190586a3b9a40be138c1a",
  measurementId: "G-EG67M2V1GB"
};


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp(firebaseConfig);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
