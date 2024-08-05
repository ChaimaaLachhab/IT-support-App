package com.support_app.controller;

import com.support_app.enums.EtatTicket;
import com.support_app.exception.UserNotFoundException;
import com.support_app.model.TicketDeSupport;
import com.support_app.model.User;
import com.support_app.service.TicketDeSupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketDeSupportController {

    @Autowired
    private TicketDeSupportService ticketDeSupportService;

    /**
     * Crée un nouveau ticket de support pour un utilisateur.
     * @param user L'utilisateur authentifié qui signale le problème.
     * @param ticket Le ticket à créer.
     * @return La réponse HTTP avec le ticket créé.
     * @throws RuntimeException Si l'utilisateur n'existe pas.
     */
    @PostMapping("/utilisateur/{utilisateurId}")
    public ResponseEntity<TicketDeSupport> createTicket(
            @AuthenticationPrincipal User user,
            @RequestBody TicketDeSupport ticket) throws UserNotFoundException {
        TicketDeSupport nouveauTicket = ticketDeSupportService.createTicket(user, ticket);
        return new ResponseEntity<>(nouveauTicket, HttpStatus.CREATED);
    }

    /**
     * Assigne un ticket à un technicien.
     * @param ticketId L'ID du ticket à assigner.
     * @param technicienId L'ID du technicien à qui assigner le ticket.
     * @return La réponse HTTP de confirmation.
     * @throws RuntimeException Si le ticket ou le technicien n'existe pas.
     */
    @PutMapping("/{ticketId}/assigner/{technicienId}")
    public ResponseEntity<Void> assignTicketToTechnician(
            @PathVariable("ticketId") Long ticketId,
            @PathVariable("technicienId") Long technicienId) {
        ticketDeSupportService.assignTicketToTechnician(ticketId, technicienId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /**
     * Récupère tous les tickets assignés à un technicien spécifique.
     * @param technicienId L'ID du technicien.
     * @return La liste des tickets assignés au technicien.
     */
    @GetMapping("/technicien/{technicienId}")
    public ResponseEntity<List<TicketDeSupport>> getTicketsByTechnician(
            @PathVariable("technicienId") Long technicienId) {
        List<TicketDeSupport> tickets = ticketDeSupportService.getTicketsByTechnician(technicienId);
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    /**
     * Récupère tous les tickets créés par un utilisateur spécifique.
     * @param utilisateurId L'ID de l'utilisateur.
     * @return La liste des tickets créés par l'utilisateur.
     */
    @GetMapping("/utilisateur/{utilisateurId}")
    public ResponseEntity<List<TicketDeSupport>> getTicketsByUtilisateur(
            @PathVariable("utilisateurId") Long utilisateurId) {
        List<TicketDeSupport> tickets = ticketDeSupportService.getTicketsByUtilisateur(utilisateurId);
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    /**
     * Récupère les détails d'un ticket de support par son ID.
     * @param ticketId L'ID du ticket.
     * @return Les détails du ticket.
     * @throws RuntimeException Si le ticket n'existe pas.
     */
    @GetMapping("/{ticketId}")
    public ResponseEntity<TicketDeSupport> getTicketById(@PathVariable("ticketId") Long ticketId) {
        TicketDeSupport ticket = ticketDeSupportService.getTicketById(ticketId);
        return new ResponseEntity<>(ticket, HttpStatus.OK);
    }

    /**
     * Met à jour l'état d'un ticket de support.
     * @param ticketId L'ID du ticket à mettre à jour.
     * @param nouvelEtat Le nouvel état du ticket.
     * @return Le ticket mis à jour.
     * @throws RuntimeException Si le ticket n'existe pas.
     */
    @PutMapping("/{ticketId}/etat")
    public ResponseEntity<TicketDeSupport> updateTicketStatus(
            @PathVariable("ticketId") Long ticketId,
            @RequestParam("etat") EtatTicket nouvelEtat) {
        TicketDeSupport ticketMisAJour = ticketDeSupportService.updateTicketStatus(ticketId, nouvelEtat);
        return new ResponseEntity<>(ticketMisAJour, HttpStatus.OK);
    }
}
