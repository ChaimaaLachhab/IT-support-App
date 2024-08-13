import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DViewsComponent } from './d-views.component';

describe('DViewsComponent', () => {
  let component: DViewsComponent;
  let fixture: ComponentFixture<DViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
