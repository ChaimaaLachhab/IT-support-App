package com.support_app.exception;

public class DefectHistoryNotFoundException extends RuntimeException {
    public DefectHistoryNotFoundException(Long defectId) {
        super("Defect with ID " + defectId + " not found.");
    }
}