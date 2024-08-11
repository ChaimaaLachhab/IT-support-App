import { SupportTicket } from './support-ticket.model';
import { DefectHistory } from './defect-history.model';
import { RegularUser } from './regular-user.model';
import {EquipmentType} from "../enums/equipment-type";
import {EquipmentStatus} from "../enums/equipment-status";

export class Equipment {
  id: number;
  name: string;
  type: EquipmentType;
  status: EquipmentStatus;
  supportTickets: SupportTicket[];
  user: RegularUser;
  history: DefectHistory[];

  constructor(id: number, name: string, type: EquipmentType, status: EquipmentStatus, supportTickets: SupportTicket[], user: RegularUser, history: DefectHistory[]) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.status = status;
    this.supportTickets = supportTickets;
    this.user = user;
    this.history = history;
  }
}
