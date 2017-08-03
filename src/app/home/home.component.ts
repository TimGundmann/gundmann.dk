import {Component, NgZone, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as EventSource from 'eventsource';
import {PushBanner} from './push-banner';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  zone: NgZone;
  campaginname: string;
  someStrings: string[];
  img_url: string;
  img_url_left: string;
  pic_width: string;
  pic_height: string;
  url = environment.host;
  campagingroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.campagingroup = this.fb.group({
      'campaginname': ''
    });
  }


  ngOnInit() {
  }

  submit() {

    this.campaginname = this.campagingroup.get('campaginname').value;
    console.log('Campagin name' + this.campaginname);
    console.log(this.campaginname);
    const observable = Observable.create(observer => {
      const eventSource = new EventSource(this.url + '/demo/try/' + this.campaginname);

      eventSource.onmessage = x => {
        const json: PushBanner[] = JSON.parse(x.data);
        console.log('array lenght ' + json.length);
        if (json.length > 3) {
          this.img_url = json[1].img_url;
          this.img_url_left = json[2].img_url;
        } else {
          this.img_url = json[0].img_url;
        }

      };

      eventSource.onerror = x => observer.error(x.data);

      return () => {
        eventSource.close();
      };
    });

    observable.subscribe({
      next: guid => {
        this.zone.run(() => this.someStrings.push(guid));
      },
      error: err => console.error('something wrong occurred: ' + err)
    });


  }
}
