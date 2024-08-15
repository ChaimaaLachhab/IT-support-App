import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UOpenTicketComponent } from './u-open-ticket.component';

describe('OpenTicketComponent', () => {
  let component: UOpenTicketComponent;
  let fixture: ComponentFixture<UOpenTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UOpenTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UOpenTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
