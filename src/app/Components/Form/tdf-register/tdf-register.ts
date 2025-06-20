import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tdf-register',
  imports: [FormsModule,
    JsonPipe,
    CommonModule],
  templateUrl: './tdf-register.html',
  styleUrl: './tdf-register.css'
})
export class TDFRegister {
submitform(data:any){
  console.log('Data is : ',data.value);
  console.log('User Name is: ',data.value.UserName);
  
}
}
