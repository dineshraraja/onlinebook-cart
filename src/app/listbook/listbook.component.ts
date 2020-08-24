import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from '../book.service';
import { AlertService } from '../service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  public results = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bs: BookService,
    private alertService: AlertService,
    private ShoppingCartService: ShoppingCartService) {}

  ngOnInit(){
    this.route.params.subscribe(routeParams => {
      routeParams.slug == null ? this.getbooklist('html') : this.getbooklist(routeParams.slug);
	  });
  }

  getbooklist(query: string){
    this.bs.getbooklist(query)
      .subscribe(
        (resp: any) => {
         this.results = [];
         this.results = resp.items;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addtocart(title){
    this.alertService.success(title.volumeInfo.title+' added to the shopping cart successfully', true);
    this.ShoppingCartService.addProductToCart(title);
  }

}