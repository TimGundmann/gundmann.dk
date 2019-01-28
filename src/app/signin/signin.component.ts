import { SigninService } from './../signin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string;

  password: string;

  constructor(private singInService: SigninService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.singInService.signIn(this.email, this.password)
      .subscribe(r => {
        if (r) {
          this.router.navigate(['user']);
        } else {

        }
      })
  }

}
