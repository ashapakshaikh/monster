import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-login',
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './mdf-login.html',
  styleUrl: './mdf-login.css'
})
export class MDFLogin {

  loginData = new FormGroup(
  {
    Email: new FormControl('',[Validators.required, Validators.email, Validators.minLength(5),Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    Password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')])
  }
);

  SubmitLogin(){
    console.log('Login Data is : ', this.loginData.value);
  }
}
