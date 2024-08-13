import { Component } from '@angular/core';
import {ViewPanelComponent} from "./view-panel/view-panel.component";
import {TicketSectionComponent} from "./ticket-section/ticket-section.component";
import { EquipmentListComponent} from "../../../../features/equipment-management/equipment-list/equipment-list.component";

@Component({
  selector: 'app-d-views',
  standalone: true,
  imports: [
    ViewPanelComponent,
    TicketSectionComponent,
    EquipmentListComponent
  ],
  templateUrl: './d-views.component.html',
  styleUrl: './d-views.component.css'
})
export class DViewsComponent {

}
