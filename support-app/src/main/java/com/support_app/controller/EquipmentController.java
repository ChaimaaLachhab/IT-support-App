package com.support_app.controller;

import com.support_app.dto.CreateEquipmentDto;
import com.support_app.dto.UpdateEquipmentStatusDto;
import com.support_app.model.Equipment;
import com.support_app.model.RegularUser;
import com.support_app.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/equipments")
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;

    /**
     * Creates a new piece of equipment.
     *
     * @param equipment The DTO containing the details of the equipment to add.
     * @return A ResponseEntity containing the added Equipment entity.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/add")
    public ResponseEntity<Equipment> addEquipment(@RequestBody CreateEquipmentDto equipment) {
        Equipment newEquipment = equipmentService.addEquipment(equipment);
        return ResponseEntity.ok(newEquipment);
    }

    /**
     * Updates the status of an existing piece of equipment.
     *
     * @param dto The DTO containing the new status of the equipment.
     * @return A ResponseEntity containing the updated Equipment entity.
     * @throws RuntimeException If the equipment does not exist.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<Equipment> updateEquipment(@RequestBody UpdateEquipmentStatusDto dto) {
        Equipment updatedEquipment = equipmentService.updateEquipment(dto);
        return ResponseEntity.ok(updatedEquipment);
    }

    /**
     * Deletes an existing piece of equipment.
     *
     * @param equipmentId The ID of the equipment to delete.
     * @return A ResponseEntity with no content if the deletion is successful.
     * @throws RuntimeException If the equipment does not exist.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEquipment(@PathVariable("id") Long equipmentId) {
        equipmentService.deleteEquipment(equipmentId);
        return ResponseEntity.noContent().build();
    }

    /**
     * Retrieves a list of all pieces of equipment.
     *
     * @return A ResponseEntity containing a list of all Equipment entities.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<Equipment>> getAllEquipments() {
        List<Equipment> equipments = equipmentService.getAllEquipments();
        return ResponseEntity.ok(equipments);
    }

    /**
     * Retrieves a list of all pieces of equipment associated with the authenticated user.
     *
     * @param user The authenticated RegularUser.
     * @return A ResponseEntity containing a list of Equipment entities associated with the user.
     */
    @PreAuthorize("hasAuthority('ROLE_USER')")
    @GetMapping("/getAllByUser")
    public ResponseEntity<List<Equipment>> getAllEquipmentsByUser(@AuthenticationPrincipal RegularUser user) {
        List<Equipment> equipments = equipmentService.getAllEquipmentsByUser(user);
        return ResponseEntity.ok(equipments);
    }

    /**
     * Retrieves a piece of equipment by its ID.
     *
     * @param equipmentId The ID of the equipment to retrieve.
     * @return A ResponseEntity containing the requested Equipment entity.
     * @throws RuntimeException If the equipment does not exist.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("/getItem/{id}")
    public ResponseEntity<Equipment> getEquipmentById(@PathVariable("id") Long equipmentId) {
        Equipment equipment = equipmentService.getEquipmentById(equipmentId);
        return ResponseEntity.ok(equipment);
    }
}
