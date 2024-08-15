import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UInProgressTicketComponent } from './u-in-progress-ticket.component';

describe('InProgressTicketComponent', () => {
  let component: UInProgressTicketComponent;
  let fixture: ComponentFixture<UInProgressTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UInProgressTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UInProgressTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
