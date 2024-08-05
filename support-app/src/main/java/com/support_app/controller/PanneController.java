package com.support_app.controller;

import com.support_app.exception.UserNotFoundException;
import com.support_app.model.Panne;
import com.support_app.model.User;
import com.support_app.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pannes")
public class PanneController {

    @Autowired
    private PanneService panneService;

    /**
     * Signale une nouvelle panne sur un équipement.
     * @param user L'utilisateur authentifié qui signale la panne.
     * @param equipementId L'ID de l'équipement concerné.
     * @param panne La panne à signaler.
     * @return La réponse HTTP avec la panne signalée.
     */
    @PostMapping("/signaler/equipement/{equipementId}")
    public ResponseEntity<Panne> signalerPanne(
            @AuthenticationPrincipal User user,
            @PathVariable("equipementId") Long equipementId,
            @RequestBody Panne panne) throws UserNotFoundException {
        Panne nouvellePanne = panneService.signalerPanne(user, equipementId, panne);
        return new ResponseEntity<>(nouvellePanne, HttpStatus.CREATED);
    }

    /**
     * Enregistre une panne détectée pour un équipement.
     * @param equipementId L'ID de l'équipement concerné.
     * @param panne La panne à enregistrer.
     * @return La réponse HTTP avec la panne enregistrée.
     * @throws RuntimeException Si l'équipement n'existe pas.
     */
    @PostMapping("/equipement/{equipementId}")
    public ResponseEntity<Panne> enregistrerPanne(
            @PathVariable("equipementId") Long equipementId,
            @RequestBody Panne panne) {
        Panne panneEnregistree = panneService.enregistrerPanne(equipementId, panne);
        return new ResponseEntity<>(panneEnregistree, HttpStatus.CREATED);
    }

    /**
     * Suit l'état des réparations pour une panne spécifique.
     * @param panneId L'ID de la panne.
     * @return La réponse HTTP avec les détails de la panne.
     * @throws RuntimeException Si la panne n'existe pas.
     */
    @GetMapping("/{panneId}")
    public ResponseEntity<Panne> suivreEtatReparation(@PathVariable("panneId") Long panneId) {
        Panne panne = panneService.suivreEtatReparation(panneId);
        return new ResponseEntity<>(panne, HttpStatus.OK);
    }

    /**
     * Consulte l'historique des pannes pour un équipement spécifique.
     * @param equipementId L'ID de l'équipement.
     * @return La liste des pannes pour l'équipement.
     */
    @GetMapping("/equipement/{equipementId}/historique")
    public ResponseEntity<List<Panne>> consulterHistoriquePannes(
            @PathVariable("equipementId") Long equipementId) {
        List<Panne> pannes = panneService.consulterHistoriquePannes(equipementId);
        return new ResponseEntity<>(pannes, HttpStatus.OK);
    }

    /**
     * Récupère les détails d'une panne par son ID.
     * @param panneId L'ID de la panne.
     * @return Les détails de la panne.
     * @throws RuntimeException Si la panne n'existe pas.
     */
//    @GetMapping("/{panneId}")
//    public ResponseEntity<Panne> getPanneById(@PathVariable("panneId") Long panneId) {
//        Panne panne = panneService.getPanneById(panneId);
//        return new ResponseEntity<>(panne, HttpStatus.OK);
//    }
}
