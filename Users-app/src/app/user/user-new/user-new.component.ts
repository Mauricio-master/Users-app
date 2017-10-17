import { Component, OnInit } from '@angular/core';

import {User} from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  newUser = new User;

  constructor() { }

  ngOnInit() {
  }

}
