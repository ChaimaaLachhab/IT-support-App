package com.support_app.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecordDefectHistoryDto {
    private Long equipmentId;
    private Long defectId;
    private String description;
    private LocalDateTime reportingDate;
}
