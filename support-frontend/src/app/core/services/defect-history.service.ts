// src/app/core/services/defect-history.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DefectHistory} from "../models/defect-history.model";
import {environment} from "../../../environments/environment";
import {UpdateDefectHistoryStatusDto} from "../dtos/update-defect-history-status-dto.dto";

@Injectable({
  providedIn: 'root'
})
export class DefectHistoryService {

  private apiUrl = `${environment.apiUrl}/defect-history`;

  constructor(private http: HttpClient) { }

  getAllDefectHistoriesByEquipment(equipmentId: number): Observable<DefectHistory[]> {
    return this.http.get<DefectHistory[]>(`${this.apiUrl}/equipments/${equipmentId}`);
  }

  createDefectHistory(createDto: UpdateDefectHistoryStatusDto): Observable<DefectHistory> {
    return this.http.post<DefectHistory>(`${this.apiUrl}`, createDto);
  }

  getDefectHistoryById(id: number): Observable<DefectHistory> {
    return this.http.get<DefectHistory>(`${this.apiUrl}/${id}`);
  }
}
