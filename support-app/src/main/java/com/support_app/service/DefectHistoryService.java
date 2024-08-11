package com.support_app.service;

import com.support_app.dto.CreateDefectHistoryDto;
import com.support_app.dto.UpdateDefectHistoryStatusDto;
import com.support_app.exception.DefectNotFoundException;
import com.support_app.exception.EquipmentNotFoundException;
import com.support_app.mapper.DefectHistoryMapper;
import com.support_app.model.Defect;
import com.support_app.model.DefectHistory;
import com.support_app.model.Equipment;
import com.support_app.repository.DefectHistoryRepository;
import com.support_app.repository.DefectRepository;
import com.support_app.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service class for managing defect histories.
 */
@Service
public class DefectHistoryService {

    @Autowired
    private DefectRepository defectRepository;

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private DefectHistoryRepository defectHistoryRepository;

    @Autowired
    private DefectHistoryMapper defectHistoryMapper;

    /**
     * Retrieves all defect histories associated with a specific equipment.
     *
     * @param equipmentId The ID of the equipment for which to retrieve defect histories.
     * @return A list of {@link DefectHistory} entities associated with the given equipment ID.
     * @throws EquipmentNotFoundException If the specified equipment does not exist.
     */
    public List<DefectHistory> getAllDefectHistoriesByEquipment(Long equipmentId) {
        return defectHistoryRepository.findDefectHistoriesByEquipment_Id(equipmentId);
    }

    /**
     * Creates a new defect history record.
     *
     * @param createDto The DTO containing the details of the defect history to create.
     * @param defect The {@link Defect} associated with the defect history.
     * @param equipment The {@link Equipment} associated with the defect history.
     * @return The created {@link DefectHistory} entity.
     * @throws DefectNotFoundException If the specified defect does not exist.
     * @throws EquipmentNotFoundException If the specified equipment does not exist.
     */
    public DefectHistory createDefectHistory(CreateDefectHistoryDto createDto, Defect defect, Equipment equipment) {
        DefectHistory defectHistory = defectHistoryMapper.fromCreateDtoToDefectHistory(createDto, defect, equipment);
        return defectHistoryRepository.save(defectHistory);
    }

    public DefectHistory updateDefectHistory(UpdateDefectHistoryStatusDto createDto) {
        Defect defect = defectRepository.findById(createDto.getDefectId())
                .orElseThrow(() -> new DefectNotFoundException(createDto.getDefectId()));
        Equipment equipment = equipmentRepository.findById(createDto.getEquipmentId())
                .orElseThrow(() -> new EquipmentNotFoundException(createDto.getEquipmentId()));

        DefectHistory defectHistory = defectHistoryMapper.fromUpdateDtoToDefectHistory(createDto, defect, equipment);

        return defectHistoryRepository.save(defectHistory);
    }

    /**
     * Retrieves a defect history by its ID.
     *
     * @param defectHistoryId The ID of the defect history to retrieve.
     * @return The requested {@link DefectHistory} entity.
     * @throws DefectNotFoundException If the defect history does not exist.
     */
    public DefectHistory getDefectHistoryById(Long defectHistoryId) {
        return defectHistoryRepository.findById(defectHistoryId)
                .orElseThrow(() -> new DefectNotFoundException(defectHistoryId));
    }
}
