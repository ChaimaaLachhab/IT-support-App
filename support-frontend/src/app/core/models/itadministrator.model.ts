import { User } from './user.model';

export class ITAdministrator extends User {

  constructor(id: number, username: string, email: string) {
    super(id, username, email, 'ADMIN');
  }
}
