import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD4bnyc75R9tBiMLU-qxdxSzViVMC-2OiI",
      authDomain: "angularrecipesbook.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
