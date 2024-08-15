// src/app/core/services/equipment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CreateEquipmentDto} from "../dtos/create-equipment-dto.dto";
import {Equipment} from "../models/equipment.model";
import {UpdateEquipmentStatusDto} from "../dtos/update-equipment-status-dto.dto";
import {RegularUser} from "../models/regular-user.model";
import {environment} from "../../../environments/environment";
import {UpdateEquipmentDto} from "../dtos/update-equipment-dto.dto";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private apiUrl = `${environment.apiUrl}/equipments`;

  constructor(private http: HttpClient) { }

  addEquipment(equipment: CreateEquipmentDto): Observable<Equipment> {
    return this.http.post<Equipment>(`${this.apiUrl}/add`, equipment);
  }

  updateEquipment(dto: UpdateEquipmentStatusDto): Observable<Equipment> {
    return this.http.put<Equipment>(`${this.apiUrl}/updateStatus/${dto.id}`, dto);
  }

  updateEquipmentall(dto: UpdateEquipmentDto): Observable<Equipment> {
    return this.http.put<Equipment>(`${this.apiUrl}/update/${dto.id}`, dto);
  }

  deleteEquipment(equipmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${equipmentId}`);
  }

  getAllEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.apiUrl}/getAll`);
  }

  getAllEquipmentsByUser(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.apiUrl}/getAllByUser`);
  }

  getEquipmentById(equipmentId: number): Observable<Equipment> {
    return this.http.get<Equipment>(`${this.apiUrl}/getItem/${equipmentId}`);
  }
}
