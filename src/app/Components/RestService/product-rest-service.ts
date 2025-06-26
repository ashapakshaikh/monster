import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductRestService {

  constructor(private _http:HttpClient) { }

  getProducts() {
    return this._http.get('https://localhost:7005/api/Product/GetAllProducts');
  }
  deleteProduct(product_id: any) {
    return this._http.delete(`https://localhost:7005/api/Product/DeleteProduct/${product_id}`);
  } 
  addProduct(productData: any) {
    return this._http.post('https://localhost:7005/api/Product/AddProduct', productData);
  }
  updateProduct(productData: any) {
    return this._http.put('https://localhost:7005/api/Product/UpdateProduct', productData);
  }
}
