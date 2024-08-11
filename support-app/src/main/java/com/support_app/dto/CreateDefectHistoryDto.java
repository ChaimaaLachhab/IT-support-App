package com.support_app.dto;

import com.support_app.enums.DefectStatus;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateDefectHistoryDto {
    private LocalDateTime reportingDate = LocalDateTime.now();
    private String description;
    private DefectStatus status;

    public CreateDefectHistoryDto(String description) {
        this.description = description;
    }
}
