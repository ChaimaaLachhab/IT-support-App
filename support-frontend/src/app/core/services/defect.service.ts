// src/app/core/services/defect.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Defect} from "../models/defect.model";
import {CreateDefectDto} from "../dtos/create-defect-dto.dto";
import {UpdateDefectDto} from "../dtos/update-defect-dto.dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DefectService {

  private apiUrl = `${environment.apiUrl}/defects`;

  constructor(private http: HttpClient) { }

  getAllDefects(): Observable<Defect[]> {
    return this.http.get<Defect[]>(`${this.apiUrl}/all`);
  }

  addDefect(createDefectDto: CreateDefectDto): Observable<Defect> {
    return this.http.post<Defect>(`${this.apiUrl}/add`, createDefectDto);
  }

  updateDefect(updateDefectDto: UpdateDefectDto): Observable<Defect> {
    return this.http.put<Defect>(`${this.apiUrl}/update`, updateDefectDto);
  }

  deleteDefect(defectId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${defectId}`);
  }
}
