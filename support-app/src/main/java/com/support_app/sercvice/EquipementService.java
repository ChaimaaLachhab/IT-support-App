package com.support_app.service;

import com.support_app.model.Equipement;
import com.support_app.repository.EquipementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipementService {

    @Autowired
    private EquipementRepository equipementRepository;

    /**
     * Ajoute un nouvel équipement informatique au système.
     * @param equipement L'équipement à ajouter.
     * @return L'équipement ajouté.
     */
    public Equipement ajouterEquipement(Equipement equipement) {
        return equipementRepository.save(equipement);
    }

    /**
     * Modifie les informations d'un équipement existant.
     * @param equipementId L'ID de l'équipement à modifier.
     * @param equipement Les nouvelles informations de l'équipement.
     * @return L'équipement mis à jour.
     * @throws RuntimeException Si l'équipement n'existe pas.
     */
    public Equipement modifierEquipement(Long equipementId, Equipement equipement) {
        Equipement equipementExistant = equipementRepository.findById(equipementId)
                .orElseThrow(() -> new RuntimeException("Équipement non trouvé."));
        equipementExistant.setNom(equipement.getNom());
        equipementExistant.setEtat(equipement.getEtat());
        equipementExistant.setDescription(equipement.getDescription());
        // Mettre à jour d'autres champs si nécessaire
        return equipementRepository.save(equipementExistant);
    }

    /**
     * Supprime un équipement obsolète ou hors service.
     * @param equipementId L'ID de l'équipement à supprimer.
     * @throws RuntimeException Si l'équipement n'existe pas.
     */
    public void supprimerEquipement(Long equipementId) {
        Equipement equipement = equipementRepository.findById(equipementId)
                .orElseThrow(() -> new RuntimeException("Équipement non trouvé."));
        equipementRepository.delete(equipement);
    }

    /**
     * Récupère la liste de tous les équipements avec leur état actuel.
     * @return La liste de tous les équipements.
     */
    public List<Equipement> listerEquipements() {
        return equipementRepository.findAll();
    }

    /**
     * Récupère un équipement par son ID.
     * @param equipementId L'ID de l'équipement.
     * @return L'équipement demandé.
     * @throws RuntimeException Si l'équipement n'existe pas.
     */
    public Equipement getEquipementById(Long equipementId) {
        return equipementRepository.findById(equipementId)
                .orElseThrow(() -> new RuntimeException("Équipement non trouvé."));
    }
}
