package com.support_app.model;

import com.support_app.enums.EtatTicket;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class TicketDeSupport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateCreation;
    private String description;

    @Enumerated(EnumType.STRING)
    private EtatTicket etat;

    @ManyToOne
    private TechnicienIT technicien;

    @ManyToOne
    private Utilisateur utilisateur;

    @OneToOne
    private Panne panne;
}
