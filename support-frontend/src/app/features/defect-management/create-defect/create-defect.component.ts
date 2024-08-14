import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Location, NgForOf} from "@angular/common";
import {DefectType} from "../../../core/enums/defect-type";
import {DefectPriority} from "../../../core/enums/defect-priority";
import {DefectService} from "../../../core/services/defect.service";
import {CreateDefectDto} from "../../../core/dtos/create-defect-dto.dto";
import {Defect} from "../../../core/models/defect.model";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-create-defect',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  templateUrl: './create-defect.component.html',
  styleUrl: './create-defect.component.css'
})
export class CreateDefectComponent  implements OnInit{
  createDefectForm!: FormGroup;
  defectsTypes = Object.values(DefectType);
  defectsPriority = Object.values(DefectPriority);

  constructor(
    private fb: FormBuilder,
    private defectService: DefectService,
    private location: Location,
    private messageService: MessageService,

) {}
  ngOnInit() {
    this.createDefectForm = this.fb.group({
      type: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['', Validators.required],
    });

  }

  onSubmit() {
    if (this.createDefectForm.valid) {
      const formValues = this.createDefectForm.value;

      const newEquipment: CreateDefectDto = {
        type: formValues.type,
        priority: formValues.priority,
        description: formValues.description,
      };

      this.defectService.addDefect(newEquipment).subscribe(
        (response: Defect) => {
          console.log('Defect added successfully:', response);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Defect added successfully' });
          this.location.back()
        },
        (error) => {
          console.error('Error adding defect:', error);
        }
      );
    }
  }
}
