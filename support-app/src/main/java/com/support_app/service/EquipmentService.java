package com.support_app.service;

import com.support_app.dto.CreateEquipmentDto;
import com.support_app.dto.UpdateEquipmentDto;
import com.support_app.dto.UpdateEquipmentStatusDto;
import com.support_app.exception.EquipmentNotFoundException;
import com.support_app.exception.UserNotFoundException;
import com.support_app.mapper.EquipmentMapper;
import com.support_app.model.Equipment;
import com.support_app.model.RegularUser;
import com.support_app.repository.EquipmentRepository;
import com.support_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentService {

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EquipmentMapper equipmentMapper;

    /**
     * Adds a new piece of equipment to the system.
     *
     * @param dto The DTO containing the details of the equipment to add.
     * @return The added Equipment entity.
     * @throws UserNotFoundException If the user associated with the equipment is not found.
     */
    public Equipment addEquipment(CreateEquipmentDto dto) {
        RegularUser user = (RegularUser) userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new UserNotFoundException(dto.getUserId()));
        Equipment equipment = equipmentMapper.fromCreateDtoToEquipment(dto, user);
        return equipmentRepository.save(equipment);
    }

    /**
     * Updates the status of an existing piece of equipment.
     *
     * @param equipmentDto The DTO containing the new status for the equipment.
     * @return The updated Equipment entity.
     * @throws EquipmentNotFoundException If the equipment does not exist.
     */
    public Equipment updateEquipmentStatus(UpdateEquipmentStatusDto equipmentDto) {
        Equipment equipment = equipmentRepository.findById(equipmentDto.getId())
                .orElseThrow(() -> new EquipmentNotFoundException(equipmentDto.getId()));
        equipmentMapper.updateEquipmentStatusDtoToEquipment(equipmentDto, equipment);
        return equipmentRepository.save(equipment);
    }

    /**
     * Updates an existing piece of equipment.
     *
     * @param equipmentDto The DTO containing the new  equipment.
     * @return The updated Equipment entity.
     * @throws EquipmentNotFoundException If the equipment does not exist.
     */
    public Equipment updateEquipment(UpdateEquipmentDto equipmentDto) {
        Equipment equipment = equipmentRepository.findById(equipmentDto.getId())
                .orElseThrow(() -> new EquipmentNotFoundException(equipmentDto.getId()));
        equipmentMapper.updateEquipmentDtoToEquipment(equipmentDto, equipment);
        return equipmentRepository.save(equipment);
    }

    /**
     * Deletes an obsolete or out-of-service piece of equipment.
     *
     * @param equipmentId The ID of the equipment to delete.
     * @throws EquipmentNotFoundException If the equipment does not exist.
     */
    public void deleteEquipment(Long equipmentId) {
        Equipment equipment = equipmentRepository.findById(equipmentId)
                .orElseThrow(() -> new EquipmentNotFoundException(equipmentId));
        equipmentRepository.delete(equipment);
    }

    /**
     * Retrieves the list of all equipment with their current status.
     *
     * @return A list of all Equipment entities.
     */
    public List<Equipment> getAllEquipments() {
        return equipmentRepository.findAll();
    }

    /**
     * Retrieves the list of all equipment associated with a specific user.
     *
     * @param user The user whose equipment is to be retrieved.
     * @return A list of Equipment entities associated with the specified user.
     */
    public List<Equipment> getAllEquipmentsByUser(RegularUser user) {
        return equipmentRepository.findEquipmentByUser(user);
    }

    /**
     * Retrieves an equipment by its ID.
     *
     * @param equipmentId The ID of the equipment to retrieve.
     * @return The requested Equipment entity.
     * @throws EquipmentNotFoundException If the equipment does not exist.
     */
    public Equipment getEquipmentById(Long equipmentId) {
        return equipmentRepository.findById(equipmentId)
                .orElseThrow(() -> new EquipmentNotFoundException(equipmentId));
    }
}
