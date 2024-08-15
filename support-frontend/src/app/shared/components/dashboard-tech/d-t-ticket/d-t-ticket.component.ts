import { Component } from '@angular/core';
import {TTicketSectionComponent} from "./ticket-section/t-ticket-section.component";
import {TViewPanelComponent} from "./view-panel/t-view-panel.component";
import {UTicketSectionComponent} from "../../dashboard-user/d-t-ticket/ticket-section/u-ticket-section.component";

@Component({
  selector: 'app-d-t-ticket',
  standalone: true,
    imports: [
        TTicketSectionComponent,
        TViewPanelComponent,
        UTicketSectionComponent
    ],
  templateUrl: './d-t-ticket.component.html',
  styleUrl: './d-t-ticket.component.css'
})
export class DTTicketComponent {

}
