package com.support_app.repository;

import com.support_app.model.SupportTicket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupportTicketRepository extends JpaRepository<SupportTicket, Long> {
    List<SupportTicket> findByTechnicianId(Long technicianId);
    List<SupportTicket> findSupportTicketsByUserId(Long userId);
}
