import { Component } from '@angular/core';
import {UTicketSectionComponent} from "./ticket-section/u-ticket-section.component";
import {UViewPanelComponent} from "./view-panel/u-view-panel.component";

@Component({
  selector: 'app-d-u-ticket',
  standalone: true,
  imports: [
    UTicketSectionComponent,
    UViewPanelComponent
  ],
  templateUrl: './d-u-ticket.component.html',
  styleUrl: './d-u-ticket.component.css'
})
export class DUTicketComponent {

}
