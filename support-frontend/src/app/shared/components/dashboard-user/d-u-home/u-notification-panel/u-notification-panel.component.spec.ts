import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNotificationPanelComponent } from './u-notification-panel.component';

describe('NotificationPanelComponent', () => {
  let component: UNotificationPanelComponent;
  let fixture: ComponentFixture<UNotificationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UNotificationPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UNotificationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
