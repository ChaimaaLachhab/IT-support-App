package com.support_app.dto;

import com.support_app.enums.TicketStatus;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateSupportTicketDto {
    private LocalDateTime creationDate = LocalDateTime.now();
    private String description;
    private TicketStatus status = TicketStatus.ASSIGNED;
    private Long defectId;
    private Long equipmentId;
}