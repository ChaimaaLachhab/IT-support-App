import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDefectComponent } from './d-defect.component';

describe('DDefectComponent', () => {
  let component: DDefectComponent;
  let fixture: ComponentFixture<DDefectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DDefectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DDefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
