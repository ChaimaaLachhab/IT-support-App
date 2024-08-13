package com.support_app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private List<SupportTicket> ticketDeSupports;

    @OneToMany
    @JsonIgnore
    private List<Equipment> equipment;

}