package com.support_app.exception;

public class SupportTicketNotFoundException extends RuntimeException {
    public SupportTicketNotFoundException(Long ticketId) {
        super("Support Ticket with ID " + ticketId + " not found.");
    }
}