import { Component } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ListcardComponent } from '../listcard/listcard.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule, ListcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allProducts: ProductInterface[] = [];
  HotProducts: ProductInterface[] = [];
  Productstravel: ProductInterface[] = [];
  ProductNational: ProductInterface[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.allProducts = data;
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

}
