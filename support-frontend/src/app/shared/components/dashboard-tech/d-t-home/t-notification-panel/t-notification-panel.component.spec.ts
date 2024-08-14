import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNotificationPanelComponent } from './t-notification-panel.component';

describe('NotificationPanelComponent', () => {
  let component: TNotificationPanelComponent;
  let fixture: ComponentFixture<TNotificationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TNotificationPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TNotificationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
