import { platformBrowser } from '@angular/platform-browser'; // * Importing the browser platform to run the Angular application
import { AppModule } from './app/app-module'; // * Importing the root module
import 'zone.js';

platformBrowser().bootstrapModule(AppModule, {
  // * Configuring the application bootstrap options

  ngZoneEventCoalescing: true, // * Combines multiple events into a single change detection cycle
})
  .catch(err => console.error(err)); // * Handling errors that occur while bootstrapping the application