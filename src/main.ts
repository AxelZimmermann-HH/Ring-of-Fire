import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';  // Korrekt aus '@angular/core' importieren
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    ...appConfig.providers,  // Falls es weitere Provider in appConfig gibt
  ]
})
  .catch((err) => console.error(err));
