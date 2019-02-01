import { AuthService } from './services/auth.service';
import {async, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {AppComponent} from './app.component';
import { MenuComponent } from './menu/menu.component';

describe('AppComponent', () => {

  class AuthServiceMock {
    public isAuthenticated(): boolean {
      return true;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent
      ],
      providers: [ 
        { provide: AuthService, useClass: AuthServiceMock } 
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
