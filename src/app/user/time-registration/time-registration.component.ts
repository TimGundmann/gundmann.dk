import { AuthService } from './../../services/auth.service';
import { SocketService } from './../../services/socket.service';
import { TimeService } from './../../services/time.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-registration',
  templateUrl: './time-registration.component.html',
  styleUrls: ['./time-registration.component.css']
})
export class TimeRegistrationComponent implements OnInit {

  activeDate: Date;
  message = '';

  constructor(
    private timeService: TimeService, 
    private websocketService: SocketService,) { }

  get hasActiveRegistration(): boolean {
    return Boolean(this.activeDate);
  }

  ngOnInit() {
    this.timeService.active().subscribe(date => this.activeDate = date);
    this.websocketService.onMessage('/topic/registrations', message => {
      this.message = message.message;
    });
  }

  toggleActivation() {
    if (this.hasActiveRegistration) {
      this.timeService.deactivate().subscribe(date => this.activeDate = undefined);
    } else {
      this.timeService.activate().subscribe(date => this.activeDate = date);
    }
  }

}
