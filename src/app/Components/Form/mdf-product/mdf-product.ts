import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-product',
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './mdf-product.html',
  styleUrl: './mdf-product.css'
})
export class MdfProduct {

   ProductForm = new FormGroup(
  {
    ProductName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    ProductDescription: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
    Price: new FormControl('', [Validators.required, Validators.min(0)]),
    StockQuantity: new FormControl('', [Validators.required, Validators.min(0)]),
    ProductCategory: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
  });
  SubmitProduct() {
    if (this.ProductForm.valid) {
      console.log('Product Data is : ', this.ProductForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

  arrayOfCategories = [
    { category: 'Electronics' },
    { category: 'Clothing' },
    { category: 'Home Appliances' },
    { category: 'Books' }
  ];
}