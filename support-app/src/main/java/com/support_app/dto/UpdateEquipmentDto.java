package com.support_app.dto;

import com.support_app.enums.EquipmentStatus;
import com.support_app.enums.EquipmentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateEquipmentDto {
    private Long id;
    private String name;
    private EquipmentStatus status;
    private EquipmentType type;
    private Long userId;
}
