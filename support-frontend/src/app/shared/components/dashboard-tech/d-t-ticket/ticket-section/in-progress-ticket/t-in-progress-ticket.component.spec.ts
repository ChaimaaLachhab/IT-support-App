import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TInProgressTicketComponent } from './t-in-progress-ticket.component';

describe('InProgressTicketComponent', () => {
  let component: TInProgressTicketComponent;
  let fixture: ComponentFixture<TInProgressTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TInProgressTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TInProgressTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
