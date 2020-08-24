import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems;
  public totalAmmount;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ShoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.totalAmmount = this.ShoppingCartService.getTotalPrice();
    this.cartItems = this.ShoppingCartService.getCart();
  }

  removeItemFromCart(productId) {
    this.ShoppingCartService.removeProductFromCart(productId);
    this.totalAmmount = 0;
    this.totalAmmount = this.ShoppingCartService.getTotalPrice();
  }

  emptyCart() {
    this.ShoppingCartService.emptyCart();
  }

}