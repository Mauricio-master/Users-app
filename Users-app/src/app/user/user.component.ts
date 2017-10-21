import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [
     new User(1, 'jose', 'alcatara', 'jose@gmail.com'),
    new User(2, 'jose', 'alcatara', 'jose@gmail.com'),
     new User(3, 'jose', 'alcatara', 'jose@gmail.com')
  ];

  constructor( private userService: UserService) { }

  ngOnInit() {
  }
  create(user: User) {
    this.users.push(user);
  }
}
