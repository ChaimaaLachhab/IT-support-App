import {DefectPriority} from "../enums/defect-priority";
import {DefectType} from "../enums/defect-type";

export interface UpdateDefectDto {
  id: number;
  type: DefectType;
  priority: DefectPriority;
  description: string;
}
