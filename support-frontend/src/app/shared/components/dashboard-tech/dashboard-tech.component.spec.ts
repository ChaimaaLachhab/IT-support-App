import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTechComponent } from './dashboard-tech.component';

describe('DashboardTechComponent', () => {
  let component: DashboardTechComponent;
  let fixture: ComponentFixture<DashboardTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
