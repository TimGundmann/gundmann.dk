import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user';
import { userInfo } from 'os';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = { email: ''};
  secondPassword: string;
  message: string;
  signingup = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public signUp(): void {
    if (this.secondPassword === this.user.password) {
    this.userService.signUp(this.user).subscribe(r => {
      if (r) {
        this.message = 'Thank you for signing up, an email have been sent to you to activate your user.';
        this.signingup = false;
      } else {
        this.message = 'An error occurred while signing up!';
      } 
     });
    } else {
      this.message = 'Passwords do not match!';
    }
  }

}
