import { User } from 'app/user/domain/user';
import { UserService } from './../../services/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import { Observable, of } from 'rxjs';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  class UserServiceMock {
    public currentUserInfo(): Observable<User> {
      return of( { email: 'test@test.dk' } );
    }
   }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserInfoComponent
      ],
      providers: [{ provide: UserService, useClass: UserServiceMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
