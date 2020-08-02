import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TimeService } from './../../services/time.service';
import { async, ComponentFixture, TestBed, inject, tick } from '@angular/core/testing';

import { TimeRegistrationComponent } from './time-registration.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TimeRegistrationComponent', () => {
  let component: TimeRegistrationComponent;
  let fixture: ComponentFixture<TimeRegistrationComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeRegistrationComponent],
      imports: [HttpClientTestingModule],
      providers: [TimeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRegistrationComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be possible to stop when a registration is currently active', inject([HttpTestingController], (httpMock: HttpTestingController) => {
    // given
    httpMock.expectOne(TimeService.ACTIVE).flush(new Date());
    fixture.detectChanges();

    // when then
    expect(debugElement.query(By.css('#activityButton')).nativeElement.innerHTML).toBe('Stop');
    httpMock.verify();
  }));

  it('should be possible to start when no registration is currently active', inject([HttpTestingController], (httpMock: HttpTestingController) => {
    // given
    httpMock.expectOne(TimeService.ACTIVE).flush(null);
    fixture.detectChanges();

    // when then
    expect(debugElement.query(By.css('#activityButton')).nativeElement.innerHTML).toBe('Start');
    httpMock.verify();
  }));

  it('should active a new registration if not active', inject([HttpTestingController], (httpMock: HttpTestingController) => {
    // given 
    httpMock.expectOne(TimeService.ACTIVE).flush(null);

    // when
    debugElement.query(By.css('#activityButton')).triggerEventHandler('click', null);
    
    // then
    httpMock.expectOne(TimeService.START).flush(new Date());
    httpMock.verify();

    fixture.detectChanges();
    expect(debugElement.query(By.css('#activityButton')).nativeElement.innerHTML).toBe('Stop');
  }));

  it('should deactive a registration if active', inject([HttpTestingController], (httpMock: HttpTestingController) => {
    // given 
    httpMock.expectOne(TimeService.ACTIVE).flush(new Date());

    // when
    debugElement.query(By.css('#activityButton')).triggerEventHandler('click', null);

    // then
    httpMock.expectOne(TimeService.STOP).flush(null);
    httpMock.verify();

    fixture.detectChanges();
    expect(debugElement.query(By.css('#activityButton')).nativeElement.innerHTML).toBe('Start');
  }));

});
