import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListSearchComponent } from './ticket-list-search.component';

describe('TicketListSearchComponent', () => {
  let component: TicketListSearchComponent;
  let fixture: ComponentFixture<TicketListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketListSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
