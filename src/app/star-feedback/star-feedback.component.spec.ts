import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFeedbackComponent } from './star-feedback.component';

describe('StarFeedbackComponent', () => {
  let component: StarFeedbackComponent;
  let fixture: ComponentFixture<StarFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
