import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';  // Korrekt aus '@angular/core' importieren
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
