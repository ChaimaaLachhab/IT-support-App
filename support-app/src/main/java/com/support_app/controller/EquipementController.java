package com.support_app.controller;

import com.support_app.model.Equipement;
import com.support_app.service.EquipementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipements")
public class EquipementController {

    @Autowired
    private EquipementService equipementService;

    /**
     * Crée un nouvel équipement.
     * @param equipement Les détails de l'équipement à ajouter.
     * @return La réponse HTTP avec l'équipement ajouté.
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public ResponseEntity<Equipement> ajouterEquipement(@RequestBody Equipement equipement) {
        Equipement nouvelEquipement = equipementService.ajouterEquipement(equipement);
        return new ResponseEntity<>(nouvelEquipement, HttpStatus.CREATED);
    }

    /**
     * Modifie un équipement existant.
     * @param equipementId L'ID de l'équipement à modifier.
     * @param equipement Les nouvelles informations de l'équipement.
     * @return La réponse HTTP avec l'équipement modifié.
     * @throws RuntimeException Si l'équipement n'existe pas.
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<Equipement> modifierEquipement(
            @PathVariable("id") Long equipementId,
            @RequestBody Equipement equipement) {
        Equipement equipementModifie = equipementService.modifierEquipement(equipementId, equipement);
        return new ResponseEntity<>(equipementModifie, HttpStatus.OK);
    }

    /**
     * Supprime un équipement existant.
     * @param equipementId L'ID de l'équipement à supprimer.
     * @return La réponse HTTP de confirmation de suppression.
     * @throws RuntimeException Si l'équipement n'existe pas.
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerEquipement(@PathVariable("id") Long equipementId) {
        equipementService.supprimerEquipement(equipementId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /**
     * Récupère la liste de tous les équipements.
     * @return La liste de tous les équipements.
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping
    public ResponseEntity<List<Equipement>> listerEquipements() {
        List<Equipement> equipements = equipementService.listerEquipements();
        return new ResponseEntity<>(equipements, HttpStatus.OK);
    }

    /**
     * Récupère un équipement par son ID.
     * @param equipementId L'ID de l'équipement à récupérer.
     * @return Les détails de l'équipement.
     * @throws RuntimeException Si l'équipement n'existe pas.
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Equipement> getEquipementById(@PathVariable("id") Long equipementId) {
        Equipement equipement = equipementService.getEquipementById(equipementId);
        return new ResponseEntity<>(equipement, HttpStatus.OK);
    }
}
