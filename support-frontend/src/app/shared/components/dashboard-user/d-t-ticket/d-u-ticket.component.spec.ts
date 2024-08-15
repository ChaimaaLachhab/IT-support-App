import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DUTicketComponent } from './d-u-ticket.component';

describe('DTTicketComponent', () => {
  let component: DUTicketComponent;
  let fixture: ComponentFixture<DUTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DUTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DUTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
