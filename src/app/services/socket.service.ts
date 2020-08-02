import { UserService } from './user.service';
import { Injectable, OnDestroy } from '@angular/core';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import { Message } from 'stompjs';
import { Subscription } from 'rxjs';

export const myRxStompConfig: InjectableRxStompConfig = {

  brokerURL: 'ws://gundmann.dk:15674/ws',

  connectHeaders: {
    login: 'notification',
    passcode: 'notification',
    host: 'gundmann.dk'
  },

  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,

  reconnectDelay: 200,

};

@Injectable({
  providedIn: 'root'
})
export class SocketService implements OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor(
    private stompService: RxStompService,
    private userService: UserService) {
  }

  onMessage(topic: string, callback: (message: any) => void) {
    this.subscriptions.push(this.userService.currentUserInfo().subscribe(user => {
      this.stompService.watch(`/topic/${user.email}`).subscribe((message: Message) => {
        try {
          callback(JSON.parse(message.body));
        } catch(exception) {
          console.error(exception);
        }
      });
    }));
  }

  send(topic: string, payload: any): void {
    this.stompService.publish({ destination: topic, body: JSON.stringify(payload) });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}