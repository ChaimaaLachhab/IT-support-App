import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UViewPanelComponent } from './u-view-panel.component';

describe('ViewPanelComponent', () => {
  let component: UViewPanelComponent;
  let fixture: ComponentFixture<UViewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UViewPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UViewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
