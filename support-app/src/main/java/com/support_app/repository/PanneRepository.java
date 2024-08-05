package com.support_app.repository;

import com.support_app.model.Panne;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PanneRepository extends JpaRepository<Panne, Long> {
    List<Panne> findByEquipementId(Long equipementId);
}
