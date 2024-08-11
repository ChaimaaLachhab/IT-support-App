import {DefectStatus} from "../enums/defect-status";

export interface UpdateDefectHistoryStatusDto {
  reportingDate?: Date;
  description: string;
  status: DefectStatus;
  defectId: number;
  equipmentId: number;
}
