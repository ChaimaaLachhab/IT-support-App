import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EquipmentType} from "../../../core/enums/equipment-type";
import {UserService} from "../../../core/services/user.service";
import {EquipmentStatus} from "../../../core/enums/equipment-status";
import {EquipmentService} from "../../../core/services/equipment.service";
import {Location, NgForOf} from "@angular/common";
import {CreateEquipmentDto} from "../../../core/dtos/create-equipment-dto.dto";
import {Equipment} from "../../../core/models/equipment.model";
import {User} from "../../../core/models/user.model";

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {
  createEquipmentForm!: FormGroup;
  users: User[] = [];
  equipmentTypes = Object.values(EquipmentType);

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}
  ngOnInit() {
    this.createEquipmentForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      status: [{ value: EquipmentStatus.ACTIVE, disabled: true }],
      userId: ['', Validators.required]
    });

    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onSubmit() {
    if (this.createEquipmentForm.valid) {
      const formValues = this.createEquipmentForm.value;

      const newEquipment: CreateEquipmentDto = {
        name: formValues.name,
        type: formValues.type,
        status: EquipmentStatus.ACTIVE,
        userId: formValues.userId
      };

      this.equipmentService.addEquipment(newEquipment).subscribe(
        (response: Equipment) => {
          console.log('Equipment added successfully:', response);
          this.location.back()
        },
        (error) => {
          console.error('Error adding equipment:', error);
        }
      );
    }
  }
}
