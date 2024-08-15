import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAssignedTicketComponent } from './t-assigned-ticket.component';

describe('AssignedTicketComponent', () => {
  let component: TAssignedTicketComponent;
  let fixture: ComponentFixture<TAssignedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TAssignedTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAssignedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
