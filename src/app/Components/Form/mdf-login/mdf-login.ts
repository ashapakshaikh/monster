import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mdf-login',
  imports: [ReactiveFormsModule],
  templateUrl: './mdf-login.html',
  styleUrl: './mdf-login.css'
})
export class MDFLogin {

  loginData = new FormGroup(
  {
    Email: new FormControl(),
    Password: new FormControl()
  }
);

  SubmitLogin(){
    console.log('Login Data is : ', this.loginData.value);
  }
}
