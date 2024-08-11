package com.support_app.repository;

import com.support_app.model.Defect;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DefectRepository extends JpaRepository<Defect, Long> {

}
