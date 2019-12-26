import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './../../services/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivateComponent } from './activate.component';

describe('ActivateComponent', () => {
  
  let component: ActivateComponent;
  let fixture: ComponentFixture<ActivateComponent>;

  class JwtHelperServiceMock {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ActivateComponent 
      ],
      providers: [ 
        UserService,
        { provide: JwtHelperService, useClass: JwtHelperServiceMock }
      ],
      imports: [ 
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
