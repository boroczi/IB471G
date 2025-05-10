import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideFirebaseApp(() => initializeApp({
    projectId: "angulartickets-fd681",
    appId: "1:1097930186537:web:ddf6e777a22b079e256138",
    storageBucket: "angulartickets-fd681.firebasestorage.app",
    apiKey: "AIzaSyASjlsfCEoDMVMV6oN4521D35rEDKWFXQ4",
    authDomain: "angulartickets-fd681.firebaseapp.com",
    messagingSenderId: "1097930186537"
  })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
