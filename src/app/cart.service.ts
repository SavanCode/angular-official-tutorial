import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartIitems: Product[] = [];
  constructor(private http: HttpClient) {}

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
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
