import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-product',
  imports: [
    ReactiveFormsModule ,
    CommonModule, 
    FormsModule
  ],
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

  arrayOfCategories:{ CategoryName:string}[] = [
    { CategoryName: 'Electronics' },
    { CategoryName: 'Clothing' },
    { CategoryName: 'Home Appliances' },
    { CategoryName: 'Books' },
    { CategoryName: 'Toys' },
    { CategoryName: 'Sports' },
    { CategoryName: 'Beauty Products' }
  ];
    ProductCategory: string = '';
      onCategoryChange() {
    //const selectedCategory = event.target.value;
    //console.log('Selected Category:', selectedCategory);
  }

}