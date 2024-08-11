// src/app/core/services/support-ticket.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CreateSupportTicketDto} from "../dtos/create-support-ticket-dto.dto";
import {SupportTicket} from "../models/support-ticket.model";
import {User} from "../models/user.model";
import {AssignTechnicianDto} from "../dtos/assign-technician-dto.dto";
import {UpdateTicketStatusDto} from "../dtos/update-ticket-status-dto.dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupportTicketService {

  private apiUrl = `${environment.apiUrl}/support-tickets`;

  constructor(private http: HttpClient) { }

  createTicket(dto: CreateSupportTicketDto, user: User): Observable<SupportTicket> {
    return this.http.post<SupportTicket>(`${this.apiUrl}/add`, dto);
  }

  assignTechnicianToTicket(dto: AssignTechnicianDto): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/assign`, dto);
  }

  getTicketsByTechnician(technicianId: number): Observable<SupportTicket[]> {
    return this.http.get<SupportTicket[]>(`${this.apiUrl}/technician/${technicianId}`);
  }

  getTicketsByUser(userId: number): Observable<SupportTicket[]> {
    return this.http.get<SupportTicket[]>(`${this.apiUrl}/user/all`);
  }

  getTicketById(ticketId: number): Observable<SupportTicket> {
    return this.http.get<SupportTicket>(`${this.apiUrl}/${ticketId}`);
  }

  updateTicketStatus(dto: UpdateTicketStatusDto): Observable<SupportTicket> {
    return this.http.put<SupportTicket>(`${this.apiUrl}/status`, dto);
  }
}
