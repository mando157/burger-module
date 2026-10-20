import { Component, signal } from '@angular/core'; // * Importing Component decorator and signal function

@Component({
  selector: 'app-root', // * Defining the custom HTML tag for this component & can take pure css selector (.test -> class , #Main -> id  , [data-type="card"] -> attribute)
  standalone: false, // * Specifying that this component belongs to an NgModule
  styleUrl: './app.scss', // * Linking the component's stylesheet (styleUrls: ['./app.scss']) array of Style Sheets
  templateUrl: './app.html', // * Linking the component's HTML template
})
export class App {
  protected readonly title = signal('burger-module'); // * Creating a reactive signal to store the application title
}