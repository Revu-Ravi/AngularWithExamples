import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APICallsComponent } from './api-calls.component';

describe('APICallsComponent', () => {
  let component: APICallsComponent;
  let fixture: ComponentFixture<APICallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APICallsComponent]
    });
    fixture = TestBed.createComponent(APICallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
