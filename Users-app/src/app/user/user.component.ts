import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .then(users =>users = users)
      .catch(err => console.log(err));
  }

  create(user: User){
    this.userService.create(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

}
