import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressTicketComponent } from './in-progress-ticket.component';

describe('InProgressTicketComponent', () => {
  let component: InProgressTicketComponent;
  let fixture: ComponentFixture<InProgressTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InProgressTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InProgressTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
