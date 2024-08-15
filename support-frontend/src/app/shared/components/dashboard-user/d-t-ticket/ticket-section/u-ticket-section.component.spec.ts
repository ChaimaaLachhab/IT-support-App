import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UTicketSectionComponent } from './u-ticket-section.component';

describe('TicketSectionComponent', () => {
  let component: UTicketSectionComponent;
  let fixture: ComponentFixture<UTicketSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UTicketSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UTicketSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
