import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service';

@Component({
  selector: 'my-app',
  
  template : `
  <body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-print-none">
  <a class="navbar-brand" href="#" routerLink = '/listbook/html'>Book Store</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" routerLink = '/listbook/html'>Html</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/bootstrap'>Bootstrap</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink = '/listbook/angular'>Angular</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/javascript'>Javascript</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/python'>Python</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/jquary'>Jquary</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/react'>React</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/java'>Java</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/c'>C</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/machinelearning'>Machine Learning</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/graphql'>Graphql</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/sql'>Sql</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink = '/listbook/redis'>Redis</a>
      </li>
      <li class="nav-item pull-right">
        <div *ngIf="user; else elseBlock"><a class="nav-link"><span class="glyphicon glyphicon-user"></span>Welcome {{user}}</a></div>
        <ng-template #elseBlock><a class="nav-link"><span class="glyphicon glyphicon-user"></span> Your Account</a></ng-template>    
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink = '/cart'><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a>
      </li>
      <li class="nav-item" *ngIf="user">
        <a class="nav-link" (click)="logout()">logout</a>
      </li>
    </ul>
  </div>
</nav>
<alert></alert>
<router-outlet></router-outlet>
</body>
  `,

  styles:[]
})
export class AppComponent implements OnInit {
  user: any;

  constructor( private authenticationService: AuthenticationService ) {}

  ngOnInit() {
    localStorage.getItem('currentUser') != null ? this.user = localStorage.getItem('currentUser') : '';
  }

  logout(){
    this.user = '';
    this.authenticationService.logout();
  }

}
