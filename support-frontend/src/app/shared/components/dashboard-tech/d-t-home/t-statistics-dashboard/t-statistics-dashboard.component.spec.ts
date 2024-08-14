import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TStatisticsDashboardComponent } from './t-statistics-dashboard.component';

describe('StatisticsDashboardComponent', () => {
  let component: TStatisticsDashboardComponent;
  let fixture: ComponentFixture<TStatisticsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TStatisticsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TStatisticsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
