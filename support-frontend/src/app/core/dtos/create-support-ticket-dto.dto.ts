import {TicketStatus} from "../enums/ticket-status";

export interface CreateSupportTicketDto {
  creationDate?: Date;
  description: string;
  status?: TicketStatus;
  defectId: number;
  equipmentId: number;
}
