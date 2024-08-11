package com.support_app.mapper;

import com.support_app.dto.CreateDefectHistoryDto;
import com.support_app.dto.UpdateDefectHistoryStatusDto;
import com.support_app.model.Defect;
import com.support_app.model.DefectHistory;
import com.support_app.model.Equipment;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface DefectHistoryMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "createDto.reportingDate", target = "reportingDate")
    @Mapping(source = "createDto.description", target = "description")
    @Mapping(source = "createDto.status", target = "status")
    @Mapping(source = "equipment", target = "equipment")
    @Mapping(source = "defect", target = "defect")
    DefectHistory fromCreateDtoToDefectHistory(CreateDefectHistoryDto createDto, Defect defect, Equipment equipment);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "createDto.reportingDate", target = "reportingDate")
    @Mapping(source = "createDto.description", target = "description")
    @Mapping(source = "createDto.status", target = "status")
    @Mapping(source = "equipment", target = "equipment")
    @Mapping(source = "defect", target = "defect")
    DefectHistory fromUpdateDtoToDefectHistory(UpdateDefectHistoryStatusDto createDto, Defect defect, Equipment equipment);
}
