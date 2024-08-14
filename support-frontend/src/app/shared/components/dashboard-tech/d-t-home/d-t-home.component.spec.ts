import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTHomeComponent } from './d-t-home.component';

describe('DTHomeComponent', () => {
  let component: DTHomeComponent;
  let fixture: ComponentFixture<DTHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DTHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DTHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
