import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartIitems: Product[] = [];
  constructor() {}

  addToCart(product: Product) {
    this.cartIitems.push(product);
  }

  getItems() {
    return this.cartIitems;
  }

  clearCart() {
    this.cartIitems = [];
    return this.cartIitems;
  }
}
