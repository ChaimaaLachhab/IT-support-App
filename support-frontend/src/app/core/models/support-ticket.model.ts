import { RegularUser } from './regular-user.model';
import { Defect } from './defect.model';
import { Equipment } from './equipment.model';
import {TicketStatus} from "../enums/ticket-status";
import {ITTechnician} from "./ittechnician.model";

export class SupportTicket {
  id: number;
  creationDate: Date;
  description: string;
  status: TicketStatus;
  user: RegularUser;
  technician: ITTechnician;
  defect: Defect;
  equipment: Equipment;

  constructor(id: number, creationDate: Date, description: string, status: TicketStatus, user: RegularUser, technician: ITTechnician, defect: Defect, equipment: Equipment) {
    this.id = id;
    this.creationDate = creationDate;
    this.description = description;
    this.status = status;
    this.user = user;
    this.technician = technician;
    this.defect = defect;
    this.equipment = equipment;
  }
}
