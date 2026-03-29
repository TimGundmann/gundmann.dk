import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: false
})
export class SigninComponent implements OnInit {

  email = '';

  password = '';

  message = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.userService.signIn(this.email, this.password)
      .subscribe(r => {
        if (r) {
          this.router.navigate(['/user/user']);
        } else {
          this.message = 'Invalid password or email';
        }
      },
      error => this.message = 'Invalid password or email'
      );
  }

}
