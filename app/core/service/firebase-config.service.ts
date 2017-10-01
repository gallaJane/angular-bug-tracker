import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

//importing the database path, so we can use it
require('firebase/database');

import { FIREBASE_CONFIG } from '../constant/constants';


//constructor
@Injectable()

export class FirebaseConfigService {

    private _database: firebase.database.Database;

    constructor(){
        // here we are gonna fire off our configureApp
        this.configureApp();
        this.configureDatabase();
    }

    //method special getter method in typescript

    public get database() {
        return this._database;
    }
    
    //method
    configureApp() {
        // initialize the app passing in the firebase config
        firebase.initializeApp(FIREBASE_CONFIG);
    
    }

    //new method, this is what gives us reference to our database
    configureDatabase(){
        //setting database property to reference to our database
        this._database = firebase.database();

    }

}