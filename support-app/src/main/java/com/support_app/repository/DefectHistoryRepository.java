package com.support_app.repository;

import com.support_app.model.DefectHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DefectHistoryRepository  extends JpaRepository<DefectHistory, Long> {
    List<DefectHistory> findDefectHistoriesByEquipment_Id(Long equipmentId);
}
