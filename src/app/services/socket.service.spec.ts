import { UserService } from './user.service';
import { RxStompService } from '@stomp/ng2-stompjs';
import { TestBed } from '@angular/core/testing';

import { SocketService } from './socket.service';

class RxStompServiceMock {}

class UserServiceMock {}

describe('SocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: UserService, useClass: UserServiceMock }, 
      { provide: RxStompService, useClass: RxStompServiceMock } 
    ]
  }));

  it('should be created', () => {
    const service: SocketService = TestBed.get(SocketService);
    expect(service).toBeTruthy();
  });
});
