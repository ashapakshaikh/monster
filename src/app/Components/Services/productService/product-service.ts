import { Injectable } from '@angular/core';
import { Prod } from '../../interfaceAndClasses/interfaceProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  arrProduct:Prod[] = [
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

  getProducts() {
    console.log('get method called....');
    return this.arrProduct;
  }
}
