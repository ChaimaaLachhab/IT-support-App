package com.support_app.model;

import com.support_app.enums.TicketStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SupportTicket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime creationDate;

    @Column(nullable = false)
    private String description;

    @Enumerated(EnumType.STRING)
    private TicketStatus status;

    @ManyToOne
    private RegularUser user;

    @ManyToOne
    private ITTechnician technician;

    @ManyToOne
    private Defect defect;

    @ManyToOne
    private Equipment equipment;
}
