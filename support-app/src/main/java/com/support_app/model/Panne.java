package com.support_app.model;

import com.support_app.enums.EtatPanne;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Panne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateSignalement;
    private String description;

    @Enumerated(EnumType.STRING)
    private EtatPanne etat;

    @ManyToOne
    private Equipement equipement;

    @OneToOne(mappedBy = "panne")
    private TicketDeSupport ticketDeSupport;

    @ManyToOne
    private Utilisateur utilisateur;
}
