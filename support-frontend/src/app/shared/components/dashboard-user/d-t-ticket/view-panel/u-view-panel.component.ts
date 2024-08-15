import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Defect} from "../../../../../core/models/defect.model";
import {Equipment} from "../../../../../core/models/equipment.model";
import {SupportTicketService} from "../../../../../core/services/support-ticket.service";
import {DefectService} from "../../../../../core/services/defect.service";
import {EquipmentService} from "../../../../../core/services/equipment.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Location, NgForOf} from "@angular/common";
import {CreateSupportTicketDto} from "../../../../../core/dtos/create-support-ticket-dto.dto";
import {TicketStatus} from "../../../../../core/enums/ticket-status";
import {SupportTicket} from "../../../../../core/models/support-ticket.model";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-u-view-panel',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    NgForOf
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './u-view-panel.component.html',
  styleUrl: './u-view-panel.component.css'
})
export class UViewPanelComponent implements OnInit{
  visible: boolean = false;
  createTicketForm!: FormGroup;
  defects: Defect[] = [];
  equipments: Equipment[] = [];

  constructor(
    private fb: FormBuilder,
    private supportTicketService: SupportTicketService,
    private defectService: DefectService,
    private equipmentService: EquipmentService,
    private messageService: MessageService,
    private location: Location,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createTicketForm = this.fb.group({
      description: ['', Validators.required],
      defectId: ['', Validators.required],
      equipmentId: ['', Validators.required]
    });

    this.loadDefects();
    this.loadEquipments();
  }

  loadDefects() {
    this.defectService.getAllDefects().subscribe(
      (data: Defect[]) => {
        this.defects = data;
      },
      (error) => {
        console.error('Error loading defects:', error);
      }
    );
  }

  loadEquipments() {
    this.equipmentService.getAllEquipmentsByUser().subscribe(
      (data: Equipment[]) => {
        this.equipments = data;
      },
      (error) => {
        console.error('Error loading equipments:', error);
      }
    );
  }

  onSubmit() {
    if (this.createTicketForm.valid) {
      const formValues = this.createTicketForm.value;

      const newTicket: CreateSupportTicketDto = {
        creationDate: new Date(),
        description: formValues.description,
        status: TicketStatus.OPEN,
        defectId: formValues.defectId,
        equipmentId: formValues.equipmentId
      };

      this.supportTicketService.createTicket(newTicket).subscribe(
        (response: SupportTicket) => {
          console.log('Ticket created successfully:', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Support ticket created successfully'
          });
          this.visible = false;
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error creating ticket:', error);
        }
      );
    }
  }

  showDialog() {
    this.visible = true;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
