import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskmanager';

  constructor(){

  	  	var firebaseConfig = {
	    apiKey: "AIzaSyB9BPo4pj8kFTh3NtlSWcxPU-txsNtsJiY",
	    authDomain: "task-manager-7cef3.firebaseapp.com",
	    databaseURL: "https://task-manager-7cef3.firebaseio.com",
	    projectId: "task-manager-7cef3",
	    storageBucket: "task-manager-7cef3.appspot.com",
	    messagingSenderId: "408862351138",
	    appId: "1:408862351138:web:cc639f468421f8ba7c8f7b"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
  }

}
