import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BookService {
  public apiurl: string;

  constructor(private http: HttpClient) { 
    this.apiurl = 'https://www.googleapis.com/books/v1/volumes?q=';
  }

  getbooklist(type?: string): Observable<any> {
    return this.http.get(this.apiurl+type,{});
  }

}