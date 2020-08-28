import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ShoppingCartService {
  public cartItems = [];
  public products = new Subject();


  getProducts(): Observable<any> {
    console.log('this.cartItems :',this.cartItems);
    return this.products.asObservable();
  }

  getCart() {
    console.log(this.cartItems);
    let total = this.cartItems;
    return total;
  }

  setProducts(products) {
    this.cartItems.push(...products);
    this.products.next(products);
  }

  addProductToCart(product) {
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    this.products.next(this.cartItems);
  }

  emptyCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  getTotalPrice() {
    let total = 0;

    this.cartItems.map(item => {
      total += item.saleInfo.retailPrice.amount;
    });

    return total.toFixed(2);
  }

}