import { Component } from '@angular/core';
import { Prod } from '../interfaceAndClasses/interfaceProducts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaceAndClasses/Product';

@Component({
  selector: 'app-assignments',
  imports: [CommonModule,FormsModule],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class Assignments {


  exmDateFormat = new Date();

txtproduct_id:number=0;
txtproduct_name:string="";
txtproduct_quantity:number=0;
txtproduct_price:number=0;
imgproductImg_url:string="";

arrObj:Product[]=[
    {
      product_id:1,
      product_name:"Nike",
      product_price:897,
      product_quantity:5,
      productImg_url:"https://images.pexels.com/photos/7974/pexels-photo.jpg"
    },
    {
      product_id:2,
      product_name:"Coca-Cola",
      product_price:8971,
      product_quantity:15,
      productImg_url:"https://images.pexels.com/photos/7974/pexels-photo.jpg"
    },
    {
      product_id:3,
      product_name:"Apple",
      product_price:89710,
      product_quantity:152,
      productImg_url:"https://images.pexels.com/photos/7974/pexels-photo.jpg"
    }
      
  ];

Submit(){
      if (this.txtproduct_id==0) {
        alert("Please enter the product id...!!!");
      }else if(this.txtproduct_name==""){
        alert("Please enter the product name...!!!");
      }else if(this.txtproduct_quantity==0 || ""){
        alert("Please enter the product quantity...!!!");
      }else if(this.txtproduct_price==0 || ""){
        alert("Please enter the product price...!!!");
      }else{     
      this.arrObj.push({
        product_id:this.txtproduct_id,
        product_name:this.txtproduct_name,
        product_price:this.txtproduct_price,
        product_quantity:this.txtproduct_quantity,
        productImg_url:this.imgproductImg_url
      })
      this.txtproduct_id=0;
      this.txtproduct_name="";
      this.txtproduct_price=0;
      this.txtproduct_quantity=0;
      alert("Product details saved sucessfully...!!!");
    }        
}
Edit(prdId:number){
  console.log(prdId);
  this.txtproduct_id=3;
}
}
