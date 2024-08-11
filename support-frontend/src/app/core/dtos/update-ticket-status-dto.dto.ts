import {TicketStatus} from "../enums/ticket-status";

export interface UpdateTicketStatusDto {
  id: number;
  status: TicketStatus;
}
