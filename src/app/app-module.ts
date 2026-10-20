import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core'; // * Importing Angular core features
import { BrowserModule } from '@angular/platform-browser'; // * Enables browser-based Angular application features
import { App } from './app'; // * Importing the root component
import { Navbar } from './components/navbar/navbar';
import { HeaderApp } from './components/header-app/header';

@NgModule({
  declarations: [
    App, // * Declaring components, directives, and pipes that belong to this module
    Navbar,
    HeaderApp,
  ],
  imports: [
    BrowserModule, // * Importing browser-related functionality
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), // * Providing global error listeners for the application
    provideZoneChangeDetection(), // * Configures change detection using Zone.js
  ],
  bootstrap: [App], // * Starting Point of the Project
})
export class AppModule {} // * Defining the root module of the application
