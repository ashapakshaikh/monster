import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-assignment-service',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './assignment-service.html',
  styleUrl: './assignment-service.css'
})
export class AssignmentService {


  txtProductName: string = '';
  txtProductPrice: number = 0;
  txtProductDescription: string = '';
  txtProductCategory: string = '';
  txtProductImage: string = '';
  txtProductRating: number = 0;
  txtProductStock: number = 0;
  txtProductBrand: string = '';
  txtproduct_id: number = 0;

  ProductData = new FormGroup({
    product_id: new FormControl('',[Validators.required , Validators.min(1)]),
    product_name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    product_price: new FormControl('', [Validators.required, Validators.min(1)]),
    product_description: new FormControl('', [Validators.required]),
    product_category: new FormControl('', [Validators.required]),
    product_image: new FormControl('', [Validators.required]),
    product_stock: new FormControl('', [Validators.required])
  });

countries = [
    { id: 1, name: 'Electronic' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Beauty & Personal Care' },
    { id: 4, name: 'Sports & Outdoors' },
    { id: 5, name: 'Books' },
    { id: 6, name: 'Toys & Games' },
    { id: 7, name: 'Home & Kitchen' },
    { id: 8, name: 'Automotive' },
    { id: 9, name: 'Health & Wellness' }
  ];
  selectedCountry: any;

  ngOnInit() {
    // Pre-select Option B on page load
    this.selectedCountry = 2;
  }

  SubmitProduct() {
    console.log('Product Data is : ', this.ProductData.value);
    // Here you can call a service to save the product data
    // For example: this.productService.saveProduct(this.ProductData.value).subscribe(response => { ... });
   // localStorage.setItem('userData', JSON.stringify(data.value));
    alert('User Registered Successfully');
  }
}
