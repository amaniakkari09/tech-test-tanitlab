import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  constructor(private http: HttpClient) {
  }

  getListOfUsers() {
    const url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get(url);
  }

}
