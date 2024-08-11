package com.support_app.exception;

public class EquipmentNotFoundException extends RuntimeException {
    public EquipmentNotFoundException(Long equipmentId) {
        super("Equipment with ID " + equipmentId + " not found.");
    }
}