import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TResolvedTicketComponent } from './t-resolved-ticket.component';

describe('ResolvedTicketComponent', () => {
  let component: TResolvedTicketComponent;
  let fixture: ComponentFixture<TResolvedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TResolvedTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TResolvedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
