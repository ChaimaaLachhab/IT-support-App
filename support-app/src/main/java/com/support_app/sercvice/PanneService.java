package com.support_app.service;

import com.support_app.exception.EquipmentNotFoundException;
import com.support_app.exception.UserNotFoundException;
import com.support_app.model.Panne;
import com.support_app.model.Equipement;
import com.support_app.model.User;
import com.support_app.model.Utilisateur;
import com.support_app.repository.PanneRepository;
import com.support_app.repository.EquipementRepository;
import com.support_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PanneService {

    @Autowired
    private PanneRepository panneRepository;

    @Autowired
    private EquipementRepository equipementRepository;

    @Autowired
    private UserRepository userRepository;

    /**
     * Signale une nouvelle panne sur un équipement par un utilisateur.
     * @param user L'utilisateur authentifié.
     * @param equipementId L'ID de l'équipement concerné.
     * @param panne La panne à signaler.
     * @return La panne créée.
     * @throws UserNotFoundException Si l'utilisateur n'existe pas.
     * @throws EquipmentNotFoundException Si l'équipement n'existe pas.
     */
    public Panne signalerPanne(User user, Long equipementId, Panne panne) throws UserNotFoundException {
        if (!(user instanceof Utilisateur)) {
            throw new UserNotFoundException("Utilisateur non trouvé.");
        }

        Utilisateur utilisateur = (Utilisateur) user;
        Equipement equipement = equipementRepository.findById(equipementId)
                .orElseThrow();

        panne.setEquipement(equipement);
        panne.setUtilisateur(utilisateur);
        return panneRepository.save(panne);
    }

    /**
     * Enregistre une panne détectée pour un équipement.
     * @param equipementId L'ID de l'équipement concerné.
     * @param panne La panne à enregistrer.
     * @return La panne enregistrée.
     * @throws RuntimeException Si l'équipement n'existe pas.
     */
    public Panne enregistrerPanne(Long equipementId, Panne panne) {
        Equipement equipement = equipementRepository.findById(equipementId).orElse(null);
        if (equipement == null) {
            throw new RuntimeException("Équipement non trouvé.");
        }
        panne.setEquipement(equipement);
        return panneRepository.save(panne);
    }

    /**
     * Suit l'état des réparations pour chaque panne signalée.
     * @param panneId L'ID de la panne.
     * @return La panne avec son état de réparation.
     * @throws RuntimeException Si la panne n'existe pas.
     */
    public Panne suivreEtatReparation(Long panneId) {
        return panneRepository.findById(panneId).orElseThrow(() -> new RuntimeException("Panne non trouvée."));
    }

    /**
     * Consulte l'historique des pannes pour un équipement spécifique.
     * @param equipementId L'ID de l'équipement.
     * @return La liste des pannes pour l'équipement.
     */
    public List<Panne> consulterHistoriquePannes(Long equipementId) {
        return panneRepository.findByEquipementId(equipementId);
    }

    /**
     * Récupère les détails d'une panne par son ID.
     * @param panneId L'ID de la panne.
     * @return La panne demandée.
     * @throws RuntimeException Si la panne n'existe pas.
     */
    public Panne getPanneById(Long panneId) {
        return panneRepository.findById(panneId).orElseThrow(() -> new RuntimeException("Panne non trouvée."));
    }
}
