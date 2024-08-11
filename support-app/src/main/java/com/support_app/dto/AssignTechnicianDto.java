package com.support_app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AssignTechnicianDto {
    private Long ticketId;
    private Long technicianId;
}
