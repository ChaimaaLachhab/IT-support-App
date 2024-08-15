import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTEquipmentComponent } from './d-t-equipment.component';

describe('DEquipmentComponent', () => {
  let component: DTEquipmentComponent;
  let fixture: ComponentFixture<DTEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DTEquipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DTEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
