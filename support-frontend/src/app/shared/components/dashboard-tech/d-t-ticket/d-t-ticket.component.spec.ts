import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTTicketComponent } from './d-t-ticket.component';

describe('DTTicketComponent', () => {
  let component: DTTicketComponent;
  let fixture: ComponentFixture<DTTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DTTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DTTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
