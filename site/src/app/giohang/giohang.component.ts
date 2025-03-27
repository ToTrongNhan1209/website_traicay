import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-giohang',
  imports: [CommonModule, FormsModule],
  templateUrl: './giohang.component.html',
  styleUrl: './giohang.component.css'
})
export class GiohangComponent {
  cart: any = [];
  constructor(private cartService: CartService){  }
    ngOnInit(): void{
      this.cart = this.cartService.getCart();

    }
    sumMoney(): number{
      return this.cartService.getSumMoney();
    }
    removeFromCart(item: any) {  
      this.cartService.removeItem(item);  
      this.cartItems = this.cartService.getItems(); // Cập nhật danh sách giỏ hàng  
    }
}
