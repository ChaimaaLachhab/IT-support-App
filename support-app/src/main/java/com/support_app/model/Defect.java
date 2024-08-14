package com.support_app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.support_app.enums.DefectStatus;
import com.support_app.enums.DefectType;
import com.support_app.enums.DefectPriority;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "defects")
public class Defect {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private DefectType type;

    @Enumerated(EnumType.STRING)
    private DefectPriority priority;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    private SupportTicket supportTickets;

    @OneToMany(mappedBy = "defect", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<DefectHistory> history;
    
}
