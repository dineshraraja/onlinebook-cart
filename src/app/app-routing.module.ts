import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ListbookComponent } from './listbook/listbook.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

import { AlertComponent } from './alert';
import { AlertService, AuthenticationService } from './service';
import { AuthGuard } from './guard';
import { ShoppingCartService } from './shopping-cart.service';

import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

export const routes: Routes = [
  { path: '', component: ListbookComponent, canActivate: [AuthGuard] },
  { path: 'listbook/:slug', component: ListbookComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path:'**',component:PageNotFoundComponent }
]


@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, ListbookComponent, AlertComponent, LoginComponent, CartComponent],
  providers: [ AlertService, AuthenticationService, ShoppingCartService],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
