import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UResolvedTicketComponent } from './u-resolved-ticket.component';

describe('ResolvedTicketComponent', () => {
  let component: UResolvedTicketComponent;
  let fixture: ComponentFixture<UResolvedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UResolvedTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UResolvedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
