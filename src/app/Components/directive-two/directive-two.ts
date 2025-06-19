import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../interfaceAndClasses/Product';

@Component({
  selector: 'app-directive-two',
  imports: [CommonModule],
  templateUrl: './directive-two.html',
  styleUrl: './directive-two.css'
})
export class DirectiveTwo {
  isPresent=true;
constructor(){
  this.isPresent=false;
}

  arrString:string[]=['Ajit','Sachin','Ganesh','Pratik']; 

  arrObj:Product[]=[
    {
      product_id:1,
      product_name:"Nike",
      product_price:897,
      product_quantity:5,
      productImg_url:""
    },
    {
      product_id:2,
      product_name:"Coca-Cola",
      product_price:8971,
      product_quantity:15,
      productImg_url:""
    },
    {
      product_id:3,
      product_name:"Apple",
      product_price:89710,
      product_quantity:152,
      productImg_url:""
    }
      
  ];
}
