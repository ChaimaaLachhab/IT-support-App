import { User } from './user.model';
import { SupportTicket } from './support-ticket.model';
import { Equipment } from './equipment.model';

export class RegularUser extends User {
  ticketDeSupports: SupportTicket[];
  equipment: Equipment[];

  constructor(id: number, username: string, email: string, ticketDeSupports: SupportTicket[], equipment: Equipment[]) {
    super(id, username, email, 'USER');
    this.ticketDeSupports = ticketDeSupports;
    this.equipment = equipment;
  }
}
