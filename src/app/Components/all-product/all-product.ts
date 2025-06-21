import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Prod } from '../interfaceAndClasses/interfaceProducts';
import { ProductService } from '../Services/productService/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-product',
  imports: [CommonModule],
  templateUrl: './all-product.html',
  styleUrl: './all-product.css'
})
export class AllProduct {

  product:Prod[] = [];

  constructor(private productService: ProductService) {
    this.product = this.productService.getProducts();
  } 

}
