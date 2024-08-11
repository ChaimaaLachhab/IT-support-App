import { DefectHistory } from './defect-history.model';
import { SupportTicket } from './support-ticket.model';
import {DefectType} from "../enums/defect-type";
import {DefectPriority} from "../enums/defect-priority";

export class Defect {
  id: number;
  type: DefectType;
  priority: DefectPriority;
  description: string;
  supportTickets: SupportTicket[];
  history: DefectHistory[];

  constructor(id: number, type: DefectType, priority: DefectPriority, description: string, supportTickets: SupportTicket[], history: DefectHistory[]) {
    this.id = id;
    this.type = type;
    this.priority = priority;
    this.description = description;
    this.supportTickets = supportTickets;
    this.history = history;
  }
}
