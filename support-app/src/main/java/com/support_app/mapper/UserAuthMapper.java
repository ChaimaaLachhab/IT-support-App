package com.support_app.mapper;

import com.support_app.dto.RegisterUserDto;
import com.support_app.model.ITAdministrator;
import com.support_app.model.ITTechnician;
import com.support_app.model.RegularUser;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface UserAuthMapper {

    // Mapping RegisterUserDto to ITAdministrator
    @Mapping(target = "username", source = "userName")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "authorities", ignore = true)
    ITAdministrator registerDtoToAdmin(RegisterUserDto dto);

    // Mapping RegisterUserDto to RegularUser
    @Mapping(target = "username", source = "userName")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "authorities", ignore = true)
    @Mapping(target = "ticketDeSupports", ignore = true)
    @Mapping(target = "equipment", ignore = true)
    RegularUser registerDtoToRegularUser(RegisterUserDto dto);

    // Mapping RegisterTechnicianDto to ITTechnician
    @Mapping(target = "username", source = "userName")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "authorities", ignore = true)
    @Mapping(target = "ticketDeSupports", ignore = true)
    ITTechnician registerDtoToTechnician(RegisterUserDto dto);
}
