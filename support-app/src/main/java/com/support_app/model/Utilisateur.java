package com.support_app.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue("UTILISATEUR")
public class Utilisateur extends User {
    @OneToMany
    private List<Panne> pannes;

    @OneToMany
    private List<TicketDeSupport> ticketDeSupports;

    @Override
    public String getRole() {
        return "ROLE_USER";
    }
}