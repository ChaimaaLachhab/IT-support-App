import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DUHomeComponent } from './d-u-home.component';

describe('DUHomeComponent', () => {
  let component: DUHomeComponent;
  let fixture: ComponentFixture<DUHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DUHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DUHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
