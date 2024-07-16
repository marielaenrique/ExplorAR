package com.project.digitalBooking.service;

import jakarta.mail.MessagingException;

public interface EmailService {

   void sendEmail(String toEmail, String subject, String body) throws MessagingException;

}
