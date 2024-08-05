package com.support_app.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Equipement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String type;
    private String etat;
    private Date dateAchat;
    private String description;

    @OneToMany(mappedBy = "equipement")
    private List<Panne> pannes;
}
