import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TimeService } from './../../services/time.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRegistrationComponent } from './time-registration.component';

describe('TimeRegistrationComponent', () => {
  let component: TimeRegistrationComponent;
  let fixture: ComponentFixture<TimeRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRegistrationComponent ],
      imports: [ HttpClientTestingModule],
      providers: [ TimeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
