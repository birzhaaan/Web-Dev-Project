import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSessionComponent } from './message-session.component';

describe('MessageSessionComponent', () => {
  let component: MessageSessionComponent;
  let fixture: ComponentFixture<MessageSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
