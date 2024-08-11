package com.support_app.model;

import jakarta.persistence.*;
import lombok.*;

@ToString
@Getter
@Setter
@Entity
@DiscriminatorValue("ADMIN")
public class ITAdministrator extends User {

}
