package com.support_app.controller;

import com.support_app.dto.CreateDefectDto;
import com.support_app.dto.UpdateDefectDto;
import com.support_app.model.Defect;
import com.support_app.service.DefectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/defects")
public class DefectController {

    @Autowired
    private DefectService defectService;

    /**
     * Retrieves all defects from the system.
     *
     * @return A ResponseEntity containing a list of all Defect entities.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_USER')")
    @GetMapping("/all")
    public ResponseEntity<List<Defect>> getAllDefects() {
        List<Defect> defects = defectService.getAllDefects();
        return ResponseEntity.ok(defects);
    }

    /**
     * Adds a new defect to the system.
     *
     * @param createDefectDto The DTO containing the details of the defect to be created.
     * @return A ResponseEntity containing the created Defect entity.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/add")
    public ResponseEntity<Defect> addDefect(@RequestBody CreateDefectDto createDefectDto) {
        Defect createdDefect = defectService.addDefect(createDefectDto);
        return ResponseEntity.ok(createdDefect);
    }

    /**
     * Updates an existing defect in the system.
     *
     * @param updateDefectDto The DTO containing the updated details of the defect.
     * @return A ResponseEntity containing the updated Defect entity.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Defect> updateDefect(@RequestBody UpdateDefectDto updateDefectDto) {
        Defect updatedDefect = defectService.updateDefect(updateDefectDto);
        return ResponseEntity.ok(updatedDefect);
    }

    /**
     * Deletes a defect from the system.
     *
     * @param defectId The ID of the defect to delete.
     * @return A ResponseEntity with no content if the deletion is successful.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDefect(@PathVariable("id") Long defectId) {
        defectService.deleteDefect(defectId);
        return ResponseEntity.noContent().build();
    }
}
