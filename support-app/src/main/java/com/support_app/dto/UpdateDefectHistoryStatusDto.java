package com.support_app.dto;

import com.support_app.enums.DefectStatus;
import com.support_app.enums.TicketStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateDefectHistoryStatusDto {
    private LocalDateTime reportingDate = LocalDateTime.now();
    private String description;
    private DefectStatus status;
    private Long defectId;
    private Long equipmentId;
}
