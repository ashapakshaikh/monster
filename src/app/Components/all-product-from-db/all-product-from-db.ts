import { Component,OnInit } from '@angular/core';
import { ProductRestService } from '../RestService/product-rest-service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Prod } from '../interfaceAndClasses/interfaceProducts';


@Component({
  selector: 'app-all-product-from-db',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './all-product-from-db.html',
  styleUrl: './all-product-from-db.css'
})
export class AllProductFromDB implements OnInit {
constructor(private ProductDBServe:ProductRestService) { }

arrObj:any = [];

 ProductData = new FormGroup({
    product_id: new FormControl('',[Validators.required , Validators.min(1)]),
    product_name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    product_price: new FormControl('', [Validators.required, Validators.min(1)]),
    // product_description: new FormControl('', [Validators.required]),
    // product_category: new FormControl('', [Validators.required]),
    productImg_url: new FormControl('', [Validators.required]),
    product_quantity: new FormControl('', [Validators.required])
  });
  //this.ProductData.Convert.Json = true; // Convert the form data to JSON format

// Initialize the component grid with product data
ngOnInit(): void {
  this.ProductDBServe.getProducts().subscribe((data) => {
  // Handle the response data here
    console.log('Product Data from DB is : ', data);
    this.arrObj = data;
  },(error)=>{
    console.log('Error fetching products:', error);
    alert("Sever side error, please try again later.");
  });
}

// DeleteProduct method
Delete(product_id:any):void {
   this.ProductDBServe.deleteProduct(product_id).subscribe((data)=>{
    console.log('Product Deleted Successfully: ',data);
    alert("Product Deleted Successfully");
    this.ngOnInit(); // Refresh the product list after deletion
  }, (error) => {
    console.log('Error deleting product:', error);
    alert("Error deleting product, please try again later.");
  });
}

// SubmitProduct data method
SubmitProduct():void  {
  const formData = this.ProductData.value;
  const jsonBody = JSON.stringify(formData);
  console.log('Product Data is : ', jsonBody);
  this.ProductDBServe.addProduct(this.ProductData.value).subscribe((data) => {
    console.log('Product Added Successfully: ', data);
    alert("Product Added Successfully");
    this.ngOnInit(); // Refresh the product list after adding
  }, (error) => {
    console.log('Error adding product:', error);
    alert("Error adding product, please try again later.");
  });
  console.log('Product Data is : ', this.ProductData.value);
  }

  // UpdateProduct method
  EditProduct(product_id:any):void {  
  const formData = this.ProductData.value;
  const jsonBody = JSON.stringify(formData);  
  console.log('Product Data is : ', jsonBody);
  this.ProductDBServe.updateProduct(this.ProductData.value).subscribe((data) => {  
    console.log('Product Updated Successfully: ', data);
    alert("Product Updated Successfully");
    this.ngOnInit(); // Refresh the product list after updating
  }, (error) => {
    console.log('Error updating product:', error);
    alert("Error updating product, please try again later.");
  });
  console.log('Product Data is : ', this.ProductData.value);  
  this.ProductData.reset(); // Reset the form after submission
  }
}
