package com.support_app.dto;

import com.support_app.enums.TicketStatus;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateTicketStatusDto {
    private Long id;
    private TicketStatus status;
}
