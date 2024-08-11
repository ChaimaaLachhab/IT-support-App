package com.support_app.mapper;

import com.support_app.dto.*;
import com.support_app.model.*;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface DefectMapper {
    // Mapper pour la création d'une panne
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "supportTickets", ignore = true)
    @Mapping(target = "history", ignore = true)
    Defect fromCreateDto(CreateDefectDto dto);

    @Mapping(target = "id", source = "id")
    @Mapping(target = "supportTickets", ignore = true)
    @Mapping(target = "history", ignore = true)
    void updateDefectFromDto(UpdateDefectDto dto, @MappingTarget Defect target);

}
