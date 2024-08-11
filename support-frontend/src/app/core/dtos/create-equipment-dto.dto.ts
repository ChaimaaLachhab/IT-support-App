import {EquipmentStatus} from "../enums/equipment-status";
import {EquipmentType} from "../enums/equipment-type";

export interface CreateEquipmentDto {
  name: string;
  type: EquipmentType;
  status?: EquipmentStatus;
  userId: number;
}
