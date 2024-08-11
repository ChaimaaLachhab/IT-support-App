package com.support_app.model;

import com.support_app.enums.DefectStatus;
import com.support_app.enums.EquipmentStatus;
import com.support_app.enums.EquipmentType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class DefectHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime reportingDate;

    @Column(nullable = false)
    private String description;

    @Enumerated(EnumType.STRING)
    private DefectStatus status;

    @ManyToOne
    private Defect defect;

    @ManyToOne
    private Equipment equipment;
}
