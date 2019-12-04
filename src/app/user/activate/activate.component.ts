import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  message = 'Activated!';

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.userService.activat(params['token'])
          .subscribe(r => {
            if (r) {
              this.router.navigate(['signin']);
            } else {
              this.message = 'Error activating user!';
            }
          });
   });
  }

}
