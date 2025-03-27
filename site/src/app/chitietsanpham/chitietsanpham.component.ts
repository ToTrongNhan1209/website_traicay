import { Component } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-chitietsanpham',
  imports: [CommonModule],
  templateUrl: './chitietsanpham.component.html',
  styleUrl: './chitietsanpham.component.css'
})
export class ChitietsanphamComponent {
  productdetail!:ProductInterface;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ){

  }
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductsById(id!).subscribe((data) => {
      this.productdetail = data;
    })  
  }

  // them san pham vao gio hang
  addCart(quantify: string): void{
    this.cartService.addCart(this.productdetail, parseInt(quantify, 10));
    console.log(this.cartService.getCartlength());
  }


}
