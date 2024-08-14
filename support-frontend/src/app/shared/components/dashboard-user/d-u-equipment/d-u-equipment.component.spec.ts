import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DUEquipmentComponent } from './d-u-equipment.component';

describe('DEquipmentComponent', () => {
  let component: DUEquipmentComponent;
  let fixture: ComponentFixture<DUEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DUEquipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DUEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
