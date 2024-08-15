import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TClosedTicketComponent } from './t-closed-ticket.component';

describe('ClosedTicketComponent', () => {
  let component: TClosedTicketComponent;
  let fixture: ComponentFixture<TClosedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TClosedTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TClosedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
