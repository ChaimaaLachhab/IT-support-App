import {DefectStatus} from "../enums/defect-status";

export interface CreateDefectHistoryDto {
  reportingDate?: Date;
  description: string;
  status: DefectStatus;
}
