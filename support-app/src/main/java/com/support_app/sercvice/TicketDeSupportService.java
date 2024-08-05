package com.support_app.service;

import com.support_app.enums.EtatTicket;
import com.support_app.exception.UserNotFoundException;
import com.support_app.model.TicketDeSupport;
import com.support_app.model.User;
import com.support_app.model.Utilisateur;
import com.support_app.model.TechnicienIT;
import com.support_app.repository.TicketDeSupportRepository;
import com.support_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketDeSupportService {

    @Autowired
    private TicketDeSupportRepository ticketDeSupportRepository;

    @Autowired
    private UserRepository userRepository;

    /**
     * Crée un nouveau ticket de support pour un utilisateur.
     * @param user L'utilisateur authentifié.
     * @param ticket Le ticket à créer.
     * @return Le ticket créé.
     * @throws UserNotFoundException Si l'utilisateur n'existe pas.
     */
    public TicketDeSupport createTicket(User user, TicketDeSupport ticket) throws UserNotFoundException {
        if (!(user instanceof Utilisateur)) {
            throw new UserNotFoundException("Utilisateur non trouvé.");
        }
        Utilisateur utilisateur = (Utilisateur) user;
        ticket.setUtilisateur(utilisateur);
        return ticketDeSupportRepository.save(ticket);
    }

    /**
     * Assigne un ticket à un technicien.
     * @param ticketId L'ID du ticket à assigner.
     * @param technicienId L'ID du technicien à qui assigner le ticket.
     * @throws RuntimeException Si le ticket ou le technicien n'existe pas.
     */
    public void assignTicketToTechnician(Long ticketId, Long technicienId) {
        TicketDeSupport ticket = ticketDeSupportRepository.findById(ticketId).orElse(null);
        TechnicienIT technicien = (TechnicienIT) userRepository.findById(technicienId).orElse(null);
        if (ticket == null) {
            throw new RuntimeException("Ticket non trouvé.");
        }
        if (technicien == null) {
            throw new RuntimeException("Technicien non trouvé.");
        }
        ticket.setTechnicien(technicien);
        ticketDeSupportRepository.save(ticket);
    }

    /**
     * Récupère tous les tickets assignés à un technicien spécifique.
     * @param technicienId L'ID du technicien.
     * @return La liste des tickets assignés au technicien.
     */
    public List<TicketDeSupport> getTicketsByTechnician(Long technicienId) {
        return ticketDeSupportRepository.findByTechnicienId(technicienId);
    }

    /**
     * Récupère tous les tickets créés par un utilisateur spécifique.
     * @param utilisateurId L'ID de l'utilisateur.
     * @return La liste des tickets créés par l'utilisateur.
     */
    public List<TicketDeSupport> getTicketsByUtilisateur(Long utilisateurId) {
        return ticketDeSupportRepository.findByUtilisateurId(utilisateurId);
    }

    /**
     * Récupère les détails d'un ticket de support par son ID.
     * @param ticketId L'ID du ticket.
     * @return Le ticket demandé.
     * @throws RuntimeException Si le ticket n'existe pas.
     */
    public TicketDeSupport getTicketById(Long ticketId) {
        return ticketDeSupportRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket non trouvé."));
    }

    /**
     * Met à jour l'état d'un ticket de support.
     * @param ticketId L'ID du ticket à mettre à jour.
     * @param nouvelEtat Le nouvel état du ticket.
     * @return Le ticket mis à jour.
     * @throws RuntimeException Si le ticket n'existe pas.
     */
    public TicketDeSupport updateTicketStatus(Long ticketId, EtatTicket nouvelEtat) {
        TicketDeSupport ticket = ticketDeSupportRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket non trouvé."));
        ticket.setEtat(nouvelEtat);
        return ticketDeSupportRepository.save(ticket);
    }
}
