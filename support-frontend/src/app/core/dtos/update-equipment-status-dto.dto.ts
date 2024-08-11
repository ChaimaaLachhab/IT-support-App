import {EquipmentStatus} from "../enums/equipment-status";

export interface UpdateEquipmentStatusDto {
  id: number;
  status: EquipmentStatus;
}
