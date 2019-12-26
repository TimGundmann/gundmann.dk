import { TimeService } from './../../services/time.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-registration',
  templateUrl: './time-registration.component.html',
  styleUrls: ['./time-registration.component.css']
})
export class TimeRegistrationComponent implements OnInit {

  activeDate: Date;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.timeService.active().subscribe(date => this.activeDate = date);
  }

}
