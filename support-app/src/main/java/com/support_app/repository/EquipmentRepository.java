package com.support_app.repository;

import com.support_app.model.Equipment;
import com.support_app.model.RegularUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
    List<Equipment> findEquipmentByUser(RegularUser user);
}
