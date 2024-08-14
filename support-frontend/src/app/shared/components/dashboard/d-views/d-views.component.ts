import { Component } from '@angular/core';
import {ViewPanelComponent} from "./view-panel/view-panel.component";
import {TicketSectionComponent} from "./ticket-section/ticket-section.component";
import {AssignedTicketComponent} from "./ticket-section/assigned-ticket/assigned-ticket.component";
import {ClosedTicketComponent} from "./ticket-section/closed-ticket/closed-ticket.component";
import {
  CreateEquipmentComponent
} from "../../../../features/equipment-management/create-equipment/create-equipment.component";

@Component({
  selector: 'app-d-views',
  standalone: true,
  imports: [
    ViewPanelComponent,
    TicketSectionComponent,
    AssignedTicketComponent,
    ClosedTicketComponent,
    CreateEquipmentComponent
  ],
  templateUrl: './d-views.component.html',
  styleUrl: './d-views.component.css'
})
export class DViewsComponent {

}
