import { Component } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { CommonModule } from '@angular/common';
import { ListcardComponent } from '../listcard/listcard.component';
import {ProductService} from '../product.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sanpham',
  imports: [CommonModule, ListcardComponent,FormsModule],
  templateUrl: './sanpham.component.html',
  styleUrl: './sanpham.component.css'
})
export class SanphamComponent {
  // class = "WD19309";
  // student = {
  //   name: 'Tô Trọng Nhân',
  //   age: 20,
  //   gender: 'Nam',
  //   img: "./assets/images/1.jpg"
  // }
  allProducts: ProductInterface[] = [];
  HotProducts: ProductInterface[] = [];
  Productstravel: ProductInterface[] = [];
  ProductNational: ProductInterface[] = [];
  sortedProducts: ProductInterface[] = [];
  sortOrder: string = '';
// sắp xếp sp theo cate
  sortCategory: string = ''; 
  // lọc
  filteredProducts: ProductInterface[] = [];  
  selectedCategory: string = ''; // Danh mục đã chọn  
  minPrice: number = 100000; // Giá tối thiểu  
  maxPrice: number = 1000000; // Giá tối đa  
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.allProducts = data;
      this.sortedProducts = data;
      console.log('full products',this.allProducts);
    });
    this.productService.getProductsHot().subscribe(data => {
      this.HotProducts = data;
      console.log('products hot',this.HotProducts);
    });
    this.productService.getProductsTravel().subscribe(data => {
      this.Productstravel = data;
      console.log('products trong nước',this.Productstravel);
    });
    this.productService.getProductNational().subscribe(data => {
      this.ProductNational = data;
      console.log('products quốc tế',this.ProductNational);
    });
  }

// sắp xếp theo giá
  sortProducts() {  
    if (this.sortOrder === 'asc') {  
      this.sortedProducts.sort((a, b) => a.price - b.price);  
    } else if (this.sortOrder === 'desc') {  
      this.sortedProducts.sort((a, b) => b.price - a.price);  
    }  
  }  

  // lọc sản phẩmm
  filterProducts() {  
    this.filteredProducts = this.allProducts.filter(product => {  
      return product.price >= this.minPrice && product.price <= this.maxPrice;  
    });  
 
    this.sortedProducts = [...this.filteredProducts];  
    this.sortProducts();
  }  


  updateCategoryAndSort() {  
    const filteredByCategory = this.sortCategory  
      ? this.filteredProducts.filter(product => product.categoryId.name === this.sortCategory)  
      : this.filteredProducts;  

    this.sortedProducts = [...filteredByCategory];  
    this.sortProducts(); 
  }  

  onFilterChange() {  
    this.filterProducts(); 
    this.updateCategoryAndSort(); 
  }  
}  
