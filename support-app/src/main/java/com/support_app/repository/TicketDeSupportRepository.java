package com.support_app.repository;

import com.support_app.model.TicketDeSupport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketDeSupportRepository extends JpaRepository<TicketDeSupport, Long> {
    List<TicketDeSupport> findByTechnicienId(Long technicienId);
    List<TicketDeSupport> findByUtilisateurId(Long utilisateurId);
}
