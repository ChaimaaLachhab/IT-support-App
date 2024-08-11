package com.support_app.dto;

import com.support_app.enums.DefectPriority;
import com.support_app.enums.DefectType;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateDefectDto {
    private DefectType type;
    private DefectPriority priority;
    private String description;
}
