import { Injectable } from '@angular/core';
import { ProductInterface } from './product-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cart: any = [];
  addCart (product: ProductInterface, quantify: number){
    const index = this.cart.findIndex((item : ProductInterface) => item._id === product._id);
    if (index === -1) {
      this.cart.push({...product, quantify});
    }else{
      this.cart[index].quantify += quantify;
    }
  }
  getCart(){
    return this.cart;
  }
  getCartlength(){
    let length = 0;
    for( let p of this.cart){
      length += p.quantify;
    }
    return length;
  }
  getSumMoney(){
    return this.cart.reduce((acc: number, item: any) => acc + item.price * item.quantify, 0);
  }
}
