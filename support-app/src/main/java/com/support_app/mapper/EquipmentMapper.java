package com.support_app.mapper;

import com.support_app.dto.*;
import com.support_app.model.*;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface EquipmentMapper {
    // Mapper pour la création d'un équipement
    @Mapping(source = "dto.name", target = "name")
    @Mapping(source = "dto.type", target = "type")
    @Mapping(source = "dto.status", target = "status")
    @Mapping(source = "user", target = "user")
    @Mapping(target = "supportTickets", ignore = true)
    @Mapping(target = "history", ignore = true)
    Equipment fromCreateDtoToEquipment(CreateEquipmentDto dto, RegularUser user);

    // Mapping methods for UpdateEquipmentStatusDto
    @Mapping(source = "id", target = "id")
    @Mapping(target = "name", ignore = true)
    @Mapping(target = "type", ignore = true)
    @Mapping(source = "status", target = "status")
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "supportTickets", ignore = true)
    @Mapping(target = "history", ignore = true)
    void updateEquipmentStatusDtoToEquipment(UpdateEquipmentStatusDto dto, @MappingTarget Equipment equipment);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "type", target = "type")
    @Mapping(source = "status", target = "status")
    @Mapping(source = "userId", target = "user.id")
    @Mapping(target = "supportTickets", ignore = true)
    @Mapping(target = "history", ignore = true)
    void updateEquipmentDtoToEquipment(UpdateEquipmentDto dto, @MappingTarget Equipment equipment);


}
