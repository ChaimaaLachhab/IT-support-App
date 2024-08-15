import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTicketSectionComponent } from './t-ticket-section.component';

describe('TicketSectionComponent', () => {
  let component: TTicketSectionComponent;
  let fixture: ComponentFixture<TTicketSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TTicketSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TTicketSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
