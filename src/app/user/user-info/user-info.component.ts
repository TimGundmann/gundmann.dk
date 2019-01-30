import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentUserInfo()
      .subscribe(user => this.user = user);
  }

}
