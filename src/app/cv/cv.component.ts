import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LinkedInService } from './../services/linked-in.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  private code = '';

  private CLIENT_ID = "786wd214gl62wf";

  private CLIENT_SECRET = "oMxyJQRL33UMTuR1";

  private REDIRECT_URI = "http%3A%2F%2Flocalhost:4200%2Fauth";


  constructor(private linkedIn: LinkedInService, private route: ActivatedRoute, private router: Router) {
    this.route
      .queryParamMap
      .pipe(map(params => params.get('code') || ''))
      .subscribe(code => {
        this.code = code;
        if (!this.code) {
          window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&scope=r_liteprofile`;
        }    
      });
  }

  ngOnInit() {
   this.linkedIn.getProfile(this.code).subscribe(profile => console.log('Profile: ', profile));
  }

}
