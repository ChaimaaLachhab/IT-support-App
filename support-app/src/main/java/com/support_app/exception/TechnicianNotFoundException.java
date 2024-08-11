package com.support_app.exception;

public class TechnicianNotFoundException extends RuntimeException {
    public TechnicianNotFoundException(Long technicianId) {
        super("Technician with ID " + technicianId + " not found.");
    }
}