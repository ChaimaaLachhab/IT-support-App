package com.support_app.dto;

import com.support_app.enums.EquipmentStatus;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateEquipmentStatusDto {
    private Long id;
    private EquipmentStatus status;
}
