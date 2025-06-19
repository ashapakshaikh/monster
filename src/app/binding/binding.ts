import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './binding.html',
  styleUrl: './binding.css'
})
export class Binding {
  userName:string="Ashpak";
  array:any=["Ajit","Pratik","Ganesh","Sachin","Ashpak"];
  isLogin:boolean=true;
  firstName="Sachin";
  sum:number=0;
  initNumber:number=0;
  txtUserName:string="";
  txtEmail:string="";
  txtMobileNum:number=0;
  txtAddress:string="";
   lblUserName:string="";
   lblEmail:string="";
   lblMobileNum:number=0;
   lblAddress:string="";
  changeName() {
    this.firstName = "Ashpak";
  }
  add(num1:number,num2:number){
    console.log(num1+num2);
    this.sum= num1+num2;
  }
   decr ="btn btn-primary";
   incr ="btn btn-success";
   reset ="btn btn-danger";
   twowayName:string='Ajit';
   btnSubmit(){
    console.log("Content of text box is :",this.twowayName);
   }
Register(){
      if (this.txtUserName=="") {
        alert("Please enter the User Name...!!!");
      }else if(this.txtEmail==""){
        alert("Please enter the Email ID...!!!");
      }else if(this.txtMobileNum==0 || ""){
        alert("Please enter the Mobile Number...!!!");
      }else if(this.txtAddress==""){
        alert("Please enter the address...!!!");
      }else{
        this.lblUserName=this.txtUserName;
        this.lblEmail=this.txtEmail;
        this.lblMobileNum=this.txtMobileNum;
        this.lblAddress=this.txtAddress;
        this.txtUserName="";
        this.txtEmail="";
        this.txtMobileNum=0;
        this.txtAddress="";
      }
     
  }
   Update(){
    this.txtUserName=this.lblUserName;
    this.txtEmail=this.lblEmail;
    this.txtMobileNum=this.lblMobileNum;
    this.txtAddress=this.lblAddress;
    this.lblUserName="";
    this.lblEmail="";
    this.lblMobileNum=0;
    this.lblAddress="";

   }
   Delete(){
    let text = "Are you sure to delete the record?";
      if (confirm(text) == true) 
        {
          this.lblUserName="";
          this.lblEmail="";
          this.lblMobileNum=0;
          this.lblAddress="";
        } 
       else 
       {
          text = "You canceled!";
       }  
   }

  Submit(Num:number){
    switch(Num){
      case 0: this.initNumber=0;
              break;
      case 1: this.initNumber++;
              break;
      case -1: this.initNumber--;
              break;
      default : this.initNumber=0;
                break;
    }
  }
  
}
