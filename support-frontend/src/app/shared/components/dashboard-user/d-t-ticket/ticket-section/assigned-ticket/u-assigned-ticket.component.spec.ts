import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UAssignedTicketComponent } from './u-assigned-ticket.component';

describe('AssignedTicketComponent', () => {
  let component: UAssignedTicketComponent;
  let fixture: ComponentFixture<UAssignedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UAssignedTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UAssignedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
