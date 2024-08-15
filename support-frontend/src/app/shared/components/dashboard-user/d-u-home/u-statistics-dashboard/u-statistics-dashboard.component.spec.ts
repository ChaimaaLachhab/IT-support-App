import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UStatisticsDashboardComponent } from './u-statistics-dashboard.component';

describe('StatisticsDashboardComponent', () => {
  let component: UStatisticsDashboardComponent;
  let fixture: ComponentFixture<UStatisticsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UStatisticsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UStatisticsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
