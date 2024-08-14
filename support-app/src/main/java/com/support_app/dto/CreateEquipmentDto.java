package com.support_app.dto;

import com.support_app.enums.EquipmentStatus;
import com.support_app.enums.EquipmentType;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateEquipmentDto {
    private String name;
    private EquipmentType type;
    private EquipmentStatus status;
    private Long userId;
}
