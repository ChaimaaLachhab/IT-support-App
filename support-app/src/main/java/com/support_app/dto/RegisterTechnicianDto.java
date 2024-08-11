package com.support_app.dto;

import com.support_app.enums.SpecializedFieldType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterTechnicianDto {
    private String userName;
    private String email;
    private String password;
    private SpecializedFieldType specializedField;
}
