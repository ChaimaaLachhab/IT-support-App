package com.support_app.mapper;

import com.support_app.dto.*;
import com.support_app.model.*;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface SupportTicketMapper {

    // Mapping methods for CreateSupportTicketDto
    @Mapping(target = "id", ignore = true)
    @Mapping(source = "dto.creationDate", target = "creationDate")
    @Mapping(source = "dto.status", target = "status")
    @Mapping(source = "dto.description", target = "description")
    @Mapping(source = "equipment", target = "equipment")
    @Mapping(source = "defect", target = "defect")
    @Mapping(source = "user", target = "user")
    @Mapping(target = "technician", ignore = true)
    SupportTicket createSupportTicketDtoToSupportTicket(CreateSupportTicketDto dto, Defect defect, Equipment equipment, RegularUser user);

    // Mapping methods for UpdateTicketStatusDto
    @Mapping(target = "creationDate", ignore = true)
    @Mapping(source = "dto.status", target = "status")
    @Mapping(target = "description", ignore = true)
    @Mapping(target = "equipment", ignore = true)
    @Mapping(target = "defect", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "technician", ignore = true)
    void updateTicketStatusDtoToSupportTicket(UpdateTicketStatusDto dto, @MappingTarget SupportTicket supportTicket);

    // Mapping methods for AssignTechnicianDto
    @Mapping(target = "creationDate", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "description", ignore = true)
    @Mapping(target = "equipment", ignore = true)
    @Mapping(target = "defect", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(source = "technicianId", target = "technician.id")
    @Mapping(source = "ticketId", target = "id")
    void assignTechnicianDtoToSupportTicket(AssignTechnicianDto dto, @MappingTarget SupportTicket supportTicket);

}
