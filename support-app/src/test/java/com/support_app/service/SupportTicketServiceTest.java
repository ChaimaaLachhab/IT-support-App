package com.support_app.service;

import com.support_app.dto.CreateDefectHistoryDto;
import com.support_app.dto.CreateSupportTicketDto;
import com.support_app.dto.UpdateTicketStatusDto;
import com.support_app.dto.AssignTechnicianDto;
import com.support_app.enums.TicketStatus;
import com.support_app.exception.*;
import com.support_app.mapper.SupportTicketMapper;
import com.support_app.model.*;
import com.support_app.repository.DefectRepository;
import com.support_app.repository.EquipmentRepository;
import com.support_app.repository.SupportTicketRepository;
import com.support_app.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;
import java.util.List;
import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class SupportTicketServiceTest {

    @Mock
    private SupportTicketRepository supportTicketRepository;

    @Mock
    private DefectRepository defectRepository;

    @Mock
    private EquipmentRepository equipmentRepository;

    @Mock
    private SupportTicketMapper supportTicketMapper;

    @InjectMocks
    private SupportTicketService supportTicketService;

    @InjectMocks
    private DefectHistoryService defectHistoryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

//    @Test
//    void createTicket() {
//        // Arrange
//        CreateSupportTicketDto dto = new CreateSupportTicketDto();
//        dto.setDefectId(1L);
//        dto.setEquipmentId(2L);
//
//        Defect defect = new Defect();
//        Equipment equipment = new Equipment();
//        RegularUser user = new RegularUser();
//
//        when(defectRepository.findById(dto.getDefectId())).thenReturn(Optional.of(defect));
//        when(equipmentRepository.findById(dto.getEquipmentId())).thenReturn(Optional.of(equipment));
//        SupportTicket mockTicket = new SupportTicket();
//        when(supportTicketMapper.createSupportTicketDtoToSupportTicket(dto, defect, equipment, user)).thenReturn(mockTicket);
//        when(supportTicketRepository.save(any(SupportTicket.class))).thenReturn(mockTicket);
//
//        // Act
//        SupportTicket result = supportTicketService.createTicket(dto, user);
//
//        // Assert
//        assertNotNull(result);
//        verify(defectRepository, times(1)).findById(dto.getDefectId());
//        verify(equipmentRepository, times(1)).findById(dto.getEquipmentId());
//        verify(supportTicketRepository, times(1)).save(mockTicket);
//        verify(defectHistoryService, times(1)).createDefectHistory(any(CreateDefectHistoryDto.class), eq(defect), eq(equipment));
//    }

    @Test
    void assignTechnicianToTicket() {
        // Arrange
        AssignTechnicianDto dto = new AssignTechnicianDto();
        dto.setTicketId(1L);

        SupportTicket ticket = new SupportTicket();
        when(supportTicketRepository.findById(dto.getTicketId())).thenReturn(Optional.of(ticket));

        // Act
        supportTicketService.assignTechnicianToTicket(dto);

        // Assert
        verify(supportTicketRepository, times(1)).findById(dto.getTicketId());
        verify(supportTicketRepository, times(1)).save(ticket);
    }

    @Test
    void getTicketsByTechnician() {
        // Arrange
        Long technicianId = 1L;
        List<SupportTicket> tickets = Collections.singletonList(new SupportTicket());
        when(supportTicketRepository.findByTechnicianId(technicianId)).thenReturn(tickets);

        // Act
        List<SupportTicket> result = supportTicketService.getTicketsByTechnician(technicianId);

        // Assert
        assertEquals(tickets.size(), result.size());
        verify(supportTicketRepository, times(1)).findByTechnicianId(technicianId);
    }

    @Test
    void getTicketsByUser() {
        // Arrange
        Long userId = 1L;
        List<SupportTicket> tickets = Collections.singletonList(new SupportTicket());
        when(supportTicketRepository.findSupportTicketsByUserId(userId)).thenReturn(tickets);

        // Act
        List<SupportTicket> result = supportTicketService.getTicketsByUser(userId);

        // Assert
        assertEquals(tickets.size(), result.size());
        verify(supportTicketRepository, times(1)).findSupportTicketsByUserId(userId);
    }

    @Test
    void getTicketById() {
        // Arrange
        Long ticketId = 1L;
        SupportTicket ticket = new SupportTicket();
        when(supportTicketRepository.findById(ticketId)).thenReturn(Optional.of(ticket));

        // Act
        SupportTicket result = supportTicketService.getTicketById(ticketId);

        // Assert
        assertNotNull(result);
        verify(supportTicketRepository, times(1)).findById(ticketId);
    }

    @Test
    void updateTicketStatus() {
        // Arrange
        Long ticketId = 1L;
        UpdateTicketStatusDto dto = new UpdateTicketStatusDto();
        dto.setId(ticketId);
        dto.setStatus(TicketStatus.RESOLVED);

        SupportTicket existingTicket = new SupportTicket();
        existingTicket.setId(ticketId);
        existingTicket.setStatus(TicketStatus.OPEN);

        SupportTicket updatedTicket = new SupportTicket();
        updatedTicket.setId(ticketId);
        updatedTicket.setStatus(TicketStatus.RESOLVED);

        when(supportTicketRepository.findById(ticketId)).thenReturn(Optional.of(existingTicket));
        doNothing().when(supportTicketMapper).updateTicketStatusDtoToSupportTicket(dto, existingTicket);
        when(supportTicketRepository.save(existingTicket)).thenReturn(updatedTicket);

        // Act
        SupportTicket result = supportTicketService.updateTicketStatus(dto);

        // Assert
        assertNotNull(result);
        assertEquals(updatedTicket, result);
        verify(supportTicketRepository, times(1)).findById(ticketId);
        verify(supportTicketMapper, times(1)).updateTicketStatusDtoToSupportTicket(dto, existingTicket);
        verify(supportTicketRepository, times(1)).save(existingTicket);
    }


}