import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mdf-login',
  imports: [ReactiveFormsModule ,CommonModule,RouterLink],
  templateUrl: './mdf-login.html',
  styleUrl: './mdf-login.css'
})
export class MDFLogin {

  // constructor(private route: RouterLink) { }

  loginData = new FormGroup(
  {
    Email: new FormControl('',[Validators.required, Validators.email, Validators.minLength(5),Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    Password: new FormControl('',[Validators.required])
  }
);

  SubmitLogin(){
    console.log('Login Data is : ', this.loginData.value);
    const data:any = localStorage.getItem('userData');
    let localData = JSON.parse(data);
    console.log('Login Data is : ', localData);
    if (localData.EmailID === this.loginData.value.Email && localData.Password === this.loginData.value.Password) {
      alert('Login Successful');
      //this.route.navigate(['']); // Navigate to the assignments page or dashboard
      // Navigate to the dashboard or home page
    } else {
      console.log('Login Failed: Invalid credentials');
      alert('Login Failed: Invalid credentials');
    }
    
  }
}
