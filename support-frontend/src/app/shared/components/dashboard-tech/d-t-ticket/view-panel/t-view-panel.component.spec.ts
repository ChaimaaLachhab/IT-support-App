import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TViewPanelComponent } from './t-view-panel.component';

describe('ViewPanelComponent', () => {
  let component: TViewPanelComponent;
  let fixture: ComponentFixture<TViewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TViewPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TViewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
