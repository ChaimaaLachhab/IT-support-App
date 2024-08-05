package com.support_app.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue("TECH")
public class TechnicienIT extends User {
    @OneToMany(mappedBy = "technicien")
    private List<TicketDeSupport> ticketDeSupports;

    @Override
    public String getRole() {
        return "ROLE_TECH";
    }
}
