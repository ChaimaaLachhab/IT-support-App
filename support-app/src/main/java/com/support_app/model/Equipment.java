package com.support_app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.support_app.enums.EquipmentStatus;
import com.support_app.enums.EquipmentType;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Equipment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    private EquipmentType type;

    @Enumerated(EnumType.STRING)
    private EquipmentStatus status;

    @OneToMany(mappedBy = "equipment", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<SupportTicket> supportTickets;

    @ManyToOne
    private RegularUser user;

    @OneToMany(mappedBy = "equipment", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<DefectHistory> history;
}
