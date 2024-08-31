import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';  // Korrekt aus '@angular/core' importieren
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    ...appConfig.providers, provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-838c8","appId":"1:44226857872:web:9986038f8b491417164115","storageBucket":"ring-of-fire-838c8.appspot.com","apiKey":"AIzaSyAQaib23KkQfVOTL_uEnDcW96rlD1EfUfY","authDomain":"ring-of-fire-838c8.firebaseapp.com","messagingSenderId":"44226857872"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-838c8","appId":"1:44226857872:web:9986038f8b491417164115","storageBucket":"ring-of-fire-838c8.appspot.com","apiKey":"AIzaSyAQaib23KkQfVOTL_uEnDcW96rlD1EfUfY","authDomain":"ring-of-fire-838c8.firebaseapp.com","messagingSenderId":"44226857872"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-838c8","appId":"1:44226857872:web:021972645eb75e5c164115","storageBucket":"ring-of-fire-838c8.appspot.com","apiKey":"AIzaSyAQaib23KkQfVOTL_uEnDcW96rlD1EfUfY","authDomain":"ring-of-fire-838c8.firebaseapp.com","messagingSenderId":"44226857872"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-838c8","appId":"1:44226857872:web:54eca9fc09ba5b33164115","storageBucket":"ring-of-fire-838c8.appspot.com","apiKey":"AIzaSyAQaib23KkQfVOTL_uEnDcW96rlD1EfUfY","authDomain":"ring-of-fire-838c8.firebaseapp.com","messagingSenderId":"44226857872"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-838c8","appId":"1:44226857872:web:2ef1f49ded52e69d164115","storageBucket":"ring-of-fire-838c8.appspot.com","apiKey":"AIzaSyAQaib23KkQfVOTL_uEnDcW96rlD1EfUfY","authDomain":"ring-of-fire-838c8.firebaseapp.com","messagingSenderId":"44226857872"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-838c8","appId":"1:44226857872:web:9986038f8b491417164115","storageBucket":"ring-of-fire-838c8.appspot.com","apiKey":"AIzaSyAQaib23KkQfVOTL_uEnDcW96rlD1EfUfY","authDomain":"ring-of-fire-838c8.firebaseapp.com","messagingSenderId":"44226857872"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-838c8","appId":"1:44226857872:web:9986038f8b491417164115","storageBucket":"ring-of-fire-838c8.appspot.com","apiKey":"AIzaSyAQaib23KkQfVOTL_uEnDcW96rlD1EfUfY","authDomain":"ring-of-fire-838c8.firebaseapp.com","messagingSenderId":"44226857872"})), provideFirestore(() => getFirestore()),  // Falls es weitere Provider in appConfig gibt
  ]
})
  .catch((err) => console.error(err));
