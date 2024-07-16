package com.project.digitalBooking.service.impl;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Log4j2
@AllArgsConstructor
@Component
public class EmailServiceImpl {

	private JavaMailSender mailSender;

	public void sendEmail(String toEmail,
			String subject,
			String body) throws MessagingException {
		try {
			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message);

			helper.setFrom("explorarnoreply@gmail.com");
			helper.setTo(toEmail);
			helper.setText(body, true);
			helper.setSubject(subject);

			mailSender.send(message);

			log.info("Mail sent succesfully");
		} catch (MessagingException e) {
			throw new MessagingException("Error when sending the verification email", e);
		}

	}

}
