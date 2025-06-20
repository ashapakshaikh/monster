import { Component, Directive } from '@angular/core';
import { Navbar } from "./Components/navbar/navbar";
import { Footer } from "./Components/footer/footer";
import { RouterOutlet } from '@angular/router';
import { Directives } from './Components/directives/directives';
import { Binding } from "./binding/binding";
import { DirectiveTwo } from './Components/directive-two/directive-two';
import { Assignments } from './Components/assignments/assignments';
import { TDFRegister } from './Components/Form/tdf-register/tdf-register';
import { MDFLogin } from './Components/Form/mdf-login/mdf-login';
import { MdfProduct } from './Components/Form/mdf-product/mdf-product';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    Directives,
    Binding,
    DirectiveTwo,
    Assignments,
    TDFRegister,
    MDFLogin,
    MdfProduct
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'monster';
}
