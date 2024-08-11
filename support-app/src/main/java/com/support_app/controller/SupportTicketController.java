package com.support_app.controller;

import com.support_app.dto.CreateSupportTicketDto;
import com.support_app.dto.UpdateTicketStatusDto;
import com.support_app.dto.AssignTechnicianDto;
import com.support_app.model.RegularUser;
import com.support_app.model.SupportTicket;
import com.support_app.model.User;
import com.support_app.service.SupportTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/support-tickets")
public class SupportTicketController {

    @Autowired
    private SupportTicketService supportTicketService;

    /**
     * Creates a new support ticket for a user.
     *
     * @param dto DTO containing the details of the support ticket to create.
     * @param user The authenticated user creating the ticket.
     * @return The created SupportTicket entity.
     */
    @PreAuthorize("hasAuthority('ROLE_USER')")
    @PostMapping("/add")
    public ResponseEntity<SupportTicket> createTicket(
            @RequestBody CreateSupportTicketDto dto,
            @AuthenticationPrincipal User user) {
        SupportTicket ticket = supportTicketService.createTicket(dto, user);
        return ResponseEntity.ok(ticket);
    }

    /**
     * Assigns a support ticket to a technician.
     *
     * @param dto DTO containing the ticket ID and the technician ID.
     * @return ResponseEntity with no content indicating successful assignment.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/assign")
    public ResponseEntity<Void> assignTechnicianToTicket(@RequestBody AssignTechnicianDto dto) {
        supportTicketService.assignTechnicianToTicket(dto);
        return ResponseEntity.noContent().build();
    }

    /**
     * Retrieves all support tickets assigned to a specific technician.
     *
     * @param technicianId The ID of the technician.
     * @return A list of SupportTicket entities assigned to the technician.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_TECH')")
    @GetMapping("/technician/{technicianId}")
    public ResponseEntity<List<SupportTicket>> getTicketsByTechnician(@PathVariable Long technicianId) {
        List<SupportTicket> tickets = supportTicketService.getTicketsByTechnician(technicianId);
        return ResponseEntity.ok(tickets);
    }

    /**
     * Retrieves all support tickets created by the authenticated user.
     *
     * @param user The authenticated user whose tickets are being retrieved.
     * @return A list of SupportTicket entities created by the user.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_USER', 'ROLE_TECH')")
    @GetMapping("/user/all")
    public ResponseEntity<List<SupportTicket>> getTicketsByUser(@AuthenticationPrincipal RegularUser user) {
        List<SupportTicket> tickets = supportTicketService.getTicketsByUser(user.getId());
        return ResponseEntity.ok(tickets);
    }

    /**
     * Retrieves the details of a support ticket by its ID.
     *
     * @param ticketId The ID of the support ticket.
     * @return The requested SupportTicket entity.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_USER')")
    @GetMapping("/{ticketId}")
    public ResponseEntity<SupportTicket> getTicketById(@PathVariable Long ticketId) {
        SupportTicket ticket = supportTicketService.getTicketById(ticketId);
        return ResponseEntity.ok(ticket);
    }

    /**
     * Updates the status of a support ticket.
     *
     * @param dto DTO containing the ticket ID and the new status.
     * @return The updated SupportTicket entity.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_TECH')")
    @PutMapping("/status")
    public ResponseEntity<SupportTicket> updateTicketStatus(@RequestBody UpdateTicketStatusDto dto) {
        SupportTicket ticket = supportTicketService.updateTicketStatus(dto);
        return ResponseEntity.ok(ticket);
    }
}
