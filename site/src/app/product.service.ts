import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from './product-interface';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
 
  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>('http://localhost:3000/products');
  }

  getProductsHot(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>('http://localhost:3000/products?hot=1&limit=4');
  }

  getProductsTravel(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>('http://localhost:3000/products?idcate=6771564e018cfe84b15c6b42&limit=4');
  }

  getProductNational(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>('http://localhost:3000/products?idcate=67c59b0fb67ca3b56852178a&limit=4');
  }
  searchProducts(keyword: string): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`http://localhost:3000/products?name=${keyword}`);
  }
  getProductsById(id:string): Observable<ProductInterface>{
    return this.http.get<ProductInterface>(`http://localhost:3000/products/${id}`);
  }
}
