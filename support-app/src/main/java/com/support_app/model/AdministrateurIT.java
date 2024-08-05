package com.support_app.model;

import jakarta.persistence.*;
import lombok.*;

@ToString
@Getter
@Setter
@Entity
@DiscriminatorValue("ADMIN")
public class AdministrateurIT extends User {
    @Override
    public String getRole() {
        return "ROLE_ADMIN";
    }
}
