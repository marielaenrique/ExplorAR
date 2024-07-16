package com.project.digitalBooking.exception;

import jakarta.mail.MessagingException;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Log4j2
@ControllerAdvice
public class GlobalExceptionHandler {

   @ExceptionHandler(ResourceNotFoundException.class)
   public ResponseEntity<?> notFound(ResourceNotFoundException e) {
      log.error(e.getMessage());
      return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.NOT_FOUND);
   }

   @ExceptionHandler(BadRequestException.class)
   public ResponseEntity<?> badRequest(BadRequestException e) {
      log.error(e.getMessage());
      return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
   }

   @ExceptionHandler(AccountNotVerifiedException.class)
   public ResponseEntity<?> notVerified(AccountNotVerifiedException e) {
      log.error(e.getMessage());
      return new ResponseEntity<>("Error " + e.getMessage(), HttpStatus.FORBIDDEN);
   }

   @ExceptionHandler(DuplicateResourceException.class)
   public ResponseEntity<?> duplicateResource(DuplicateResourceException e) {
      log.error(e.getMessage());
      return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.CONFLICT);
   }

   @ExceptionHandler(MessagingException.class)
   public ResponseEntity<?> messageError(MessagingException e) {
      log.error(e.getMessage());
      return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
   }

   @ExceptionHandler(IllegalArgumentException.class)
   public ResponseEntity<?> illegalArgumentException(IllegalArgumentException e) {
      log.error(e.getMessage());
      return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
   }

}
