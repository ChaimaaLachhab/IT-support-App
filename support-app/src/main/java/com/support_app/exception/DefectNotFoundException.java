package com.support_app.exception;

public class DefectNotFoundException extends RuntimeException {
    public DefectNotFoundException(Long defectId) {
        super("Defect History with ID " + defectId + " not found.");
    }
}