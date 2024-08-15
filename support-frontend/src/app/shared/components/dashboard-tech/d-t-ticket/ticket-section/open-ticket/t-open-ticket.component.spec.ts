import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOpenTicketComponent } from './t-open-ticket.component';

describe('OpenTicketComponent', () => {
  let component: TOpenTicketComponent;
  let fixture: ComponentFixture<TOpenTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TOpenTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TOpenTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
