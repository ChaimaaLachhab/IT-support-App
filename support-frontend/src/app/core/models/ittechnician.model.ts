import { User } from './user.model';
import { SupportTicket } from './support-ticket.model';

export class ITTechnician extends User {
  ticketDeSupports: SupportTicket[];

  constructor(id: number, username: string, email: string, ticketDeSupports: SupportTicket[]) {
    super(id, username, email, 'TECH');
    this.ticketDeSupports = ticketDeSupports;
  }
}
