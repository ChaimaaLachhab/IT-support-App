import { Defect } from './defect.model';
import { Equipment } from './equipment.model';
import {DefectStatus} from "../enums/defect-status";

export class DefectHistory {
  id: number;
  reportingDate: Date;
  description: string;
  status: DefectStatus;
  defect: Defect;
  equipment: Equipment;

  constructor(id: number, reportingDate: Date, description: string, status: DefectStatus, defect: Defect, equipment: Equipment) {
    this.id = id;
    this.reportingDate = reportingDate;
    this.description = description;
    this.status = status;
    this.defect = defect;
    this.equipment = equipment;
  }
}
