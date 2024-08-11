import {DefectPriority} from "../enums/defect-priority";
import {DefectType} from "../enums/defect-type";

export interface CreateDefectDto {
  type: DefectType;
  priority: DefectPriority;
  description: string;
}
