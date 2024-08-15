import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UClosedTicketComponent } from './u-closed-ticket.component';

describe('ClosedTicketComponent', () => {
  let component: UClosedTicketComponent;
  let fixture: ComponentFixture<UClosedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UClosedTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UClosedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
