import { SigninService } from './../signin.service';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  class SigninServiceMock {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      providers: [ { provide: SigninService, useClass: SigninServiceMock } ],
      imports: [ 
        FormsModule,
        RouterTestingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
