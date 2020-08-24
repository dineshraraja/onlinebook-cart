import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookService } from './book.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guard';
import { ShoppingCartService } from './shopping-cart.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [ HelloComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ BookService, AuthGuard, ShoppingCartService ]
})
export class AppModule { }
