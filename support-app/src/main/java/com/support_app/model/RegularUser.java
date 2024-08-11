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
@DiscriminatorValue("USER")
public class RegularUser extends User {

    @OneToMany
    private List<SupportTicket> ticketDeSupports;

    @OneToMany
    private List<Equipment> equipment;

}