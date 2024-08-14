import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEquipmentComponent } from './d-equipment.component';

describe('DEquipmentComponent', () => {
  let component: DEquipmentComponent;
  let fixture: ComponentFixture<DEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
