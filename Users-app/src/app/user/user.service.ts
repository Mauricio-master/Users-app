import { Injectable } from '@angular/core';


import {User} from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  create(user: User) {
    return this.http.post('/users', user)
      .map(data => console.log(data)).toPromise();
  }

  detroy(user: User) {
    return this.http.delete('/users/' + user.id)
    .map(data => console.log(data)).toPromise();
  }

  update(user: User) {
    return this.http.put('/users/' + user.id, user)
    .map(data => console.log(data)).toPromise();
  }

  getUsers() {
    return this.http.get('/users')
    .map(data => console.log(data)).toPromise();
  }

  getUser(user: User) {
    return this.http.get('/users/' + user.id)
    .map(data => console.log(data)).toPromise();
  }
}
