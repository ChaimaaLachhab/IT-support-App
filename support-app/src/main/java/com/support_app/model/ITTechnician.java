package com.support_app.model;

import com.support_app.enums.SpecializedFieldType;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue("TECH")
public class ITTechnician extends User {

//    @Enumerated(EnumType.STRING)
//    private SpecializedFieldType specializedField;

    @OneToMany(mappedBy = "technician")
    private List<SupportTicket> ticketDeSupports;

}
