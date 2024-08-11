package com.support_app.service;

import com.support_app.dto.CreateDefectDto;
import com.support_app.dto.UpdateDefectDto;
import com.support_app.exception.DefectNotFoundException;
import com.support_app.mapper.DefectMapper;
import com.support_app.model.Defect;
import com.support_app.repository.DefectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DefectService {

    @Autowired
    private DefectRepository defectRepository;

    @Autowired
    private DefectMapper defectMapper;

    /**
     * Retrieves all defects from the system.
     *
     * @return A list of all Defect entities.
     */
    public List<Defect> getAllDefects() {
        return defectRepository.findAll();
    }

    /**
     * Adds a new defect to the system.
     *
     * @param dto The DTO containing the details of the defect to be created.
     * @return The created Defect entity.
     */
    public Defect addDefect(CreateDefectDto dto) {
        Defect defect = defectMapper.fromCreateDto(dto);
        return defectRepository.save(defect);
    }

    /**
     * Updates an existing defect in the system.
     *
     * @param dto The DTO containing the updated details of the defect.
     * @return The updated Defect entity.
     * @throws DefectNotFoundException If a defect with the given ID is not found.
     */
    public Defect updateDefect(UpdateDefectDto dto) {
        Defect defect = defectRepository.findById(dto.getId())
                .orElseThrow(() -> new DefectNotFoundException(dto.getId()));

        defectMapper.updateDefectFromDto(dto, defect);
        return defectRepository.save(defect);
    }

    /**
     * Deletes a defect from the system.
     *
     * @param defectId The ID of the defect to delete.
     * @throws DefectNotFoundException If a defect with the given ID is not found.
     */
    public void deleteDefect(Long defectId) {
        Defect defect = defectRepository.findById(defectId)
                .orElseThrow(() -> new DefectNotFoundException(defectId));
        defectRepository.delete(defect);
    }
}
