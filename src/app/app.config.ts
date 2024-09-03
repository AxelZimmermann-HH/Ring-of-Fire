import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), 
    provideFirestore(() => getFirestore()), 
    provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-838c8","appId":"1:44226857872:web:9986038f8b491417164115",
      "storageBucket":"ring-of-fire-838c8.appspot.com","apiKey":"AIzaSyAQaib23KkQfVOTL_uEnDcW96rlD1EfUfY","authDomain":"ring-of-fire-838c8.firebaseapp.com","messagingSenderId":"44226857872"}))
  ]
};
