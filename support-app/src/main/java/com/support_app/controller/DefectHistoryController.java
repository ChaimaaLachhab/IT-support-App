package com.support_app.controller;

import com.support_app.dto.CreateDefectHistoryDto;
import com.support_app.dto.UpdateDefectHistoryStatusDto;
import com.support_app.dto.UpdateTicketStatusDto;
import com.support_app.model.DefectHistory;
import com.support_app.model.SupportTicket;
import com.support_app.service.DefectHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/defect-history")
public class DefectHistoryController {

    @Autowired
    private DefectHistoryService defectHistoryService;

    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_USER')")
    @GetMapping("/equipments/{equipmentId}")
    public ResponseEntity<List<DefectHistory>> getAllDefectHistoriesByEquipment(@PathVariable Long equipmentId) {
        List<DefectHistory> defectHistories = defectHistoryService.getAllDefectHistoriesByEquipment(equipmentId);
        return ResponseEntity.ok(defectHistories);
    }

    /**
     * Endpoint to create a new defect history record.
     *
     * @param createDto The DTO containing the details needed to create a new defect history.
     * @return The created DefectHistory entity.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_TECH')")
    @PostMapping
    public ResponseEntity<DefectHistory> createDefectHistory(@RequestBody UpdateDefectHistoryStatusDto createDto) {
        DefectHistory defectHistory = defectHistoryService.updateDefectHistory(createDto);
        return ResponseEntity.ok(defectHistory);
    }

    /**
     * Endpoint to retrieve a specific defect history record by its ID.
     *
     * @param id The ID of the defect history to retrieve.
     * @return The DefectHistory entity if found.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_USER')")
    @GetMapping("/{id}")
    public ResponseEntity<DefectHistory> getDefectHistoryById(@PathVariable Long id) {
        DefectHistory defectHistory = defectHistoryService.getDefectHistoryById(id);
        return ResponseEntity.ok(defectHistory);
    }
}
