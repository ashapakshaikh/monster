import { Component, Directive } from '@angular/core';
import { Navbar } from "./Components/navbar/navbar";
import { Footer } from "./Components/footer/footer";
import { RouterOutlet } from '@angular/router';
import { Directives } from './Components/directives/directives';
import { Binding } from "./binding/binding";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    Directives,
    Binding
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'monster';
}
