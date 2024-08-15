package com.support_app.service;

import com.support_app.dto.CreateDefectHistoryDto;
import com.support_app.dto.CreateSupportTicketDto;
import com.support_app.dto.UpdateTicketStatusDto;
import com.support_app.dto.AssignTechnicianDto;
import com.support_app.exception.*;
import com.support_app.mapper.SupportTicketMapper;
import com.support_app.model.*;
import com.support_app.repository.DefectRepository;
import com.support_app.repository.EquipmentRepository;
import com.support_app.repository.SupportTicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupportTicketService {

    @Autowired
    private SupportTicketRepository supportTicketRepository;

    @Autowired
    private DefectRepository defectRepository;

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private SupportTicketMapper supportTicketMapper;

    @Autowired
    private DefectHistoryService defectHistoryService;

    /**
     * Creates a new support ticket for a user.
     *
     * @param dto DTO containing the details of the support ticket to create.
     * @param user The authenticated user who is creating the ticket.
     * @return The created SupportTicket entity.
     * @throws DefectNotFoundException If the specified defect does not exist.
     * @throws EquipmentNotFoundException If the specified equipment does not exist.
     */
    public SupportTicket createTicket(CreateSupportTicketDto dto, User user) {
        Defect defect = defectRepository.findById(dto.getDefectId())
                .orElseThrow(() -> new DefectNotFoundException(dto.getDefectId()));
        Equipment equipment = equipmentRepository.findById(dto.getEquipmentId())
                .orElseThrow(() -> new EquipmentNotFoundException(dto.getEquipmentId()));
        SupportTicket ticket = supportTicketMapper.createSupportTicketDtoToSupportTicket(dto, defect, equipment, (RegularUser) user);
        CreateDefectHistoryDto createDefectHistoryDto = new CreateDefectHistoryDto(dto.getDescription());
        defectHistoryService.createDefectHistory(createDefectHistoryDto, defect, equipment);
        return supportTicketRepository.save(ticket);
    }

    /**
     * Assigns a support ticket to a technician.
     *
     * @param dto DTO containing the ticket ID and the technician ID.
     * @throws SupportTicketNotFoundException If the specified ticket does not exist.
     * @throws TechnicianNotFoundException If the specified technician does not exist.
     */
    public void assignTechnicianToTicket(AssignTechnicianDto dto) {
        SupportTicket ticket = supportTicketRepository.findById(dto.getTicketId())
                .orElseThrow(() -> new SupportTicketNotFoundException(dto.getTicketId()));
        supportTicketMapper.assignTechnicianDtoToSupportTicket(dto, ticket);
        supportTicketRepository.save(ticket);
    }

    /**
     * Retrieves all support tickets assigned to a specific technician.
     *
     * @param technicianId The object of the technician.
     * @return A list of SupportTicket entities assigned to the technician.
     */
    public List<SupportTicket> getTicketsByTechnician(Long technicianId) {
        return supportTicketRepository.findSupportTicketsByTechnicianId(technicianId);
    }

    public List<SupportTicket> getAllTickets() {
        return supportTicketRepository.findAll();
    }

    /**
     * Retrieves all support tickets created by a specific user.
     *
     * @param userId The ID of the user.
     * @return A list of SupportTicket entities created by the user.
     */
    public List<SupportTicket> getTicketsByUser(Long userId) {
        return supportTicketRepository.findSupportTicketsByUserId(userId);
    }

    /**
     * Retrieves the details of a support ticket by its ID.
     *
     * @param ticketId The ID of the support ticket.
     * @return The requested SupportTicket entity.
     * @throws SupportTicketNotFoundException If the ticket does not exist.
     */
    public SupportTicket getTicketById(Long ticketId) {
        return supportTicketRepository.findById(ticketId)
                .orElseThrow(() -> new SupportTicketNotFoundException(ticketId));
    }

    /**
     * Updates the status of a support ticket.
     *
     * @param dto DTO containing the ticket ID and the new status.
     * @return The updated SupportTicket entity.
     * @throws SupportTicketNotFoundException If the ticket does not exist.
     */
    public SupportTicket updateTicketStatus(UpdateTicketStatusDto dto) {
        SupportTicket ticket = supportTicketRepository.findById(dto.getId())
                .orElseThrow(() -> new SupportTicketNotFoundException(dto.getId()));
        supportTicketMapper.updateTicketStatusDtoToSupportTicket(dto, ticket);
        return supportTicketRepository.save(ticket);
    }
}
