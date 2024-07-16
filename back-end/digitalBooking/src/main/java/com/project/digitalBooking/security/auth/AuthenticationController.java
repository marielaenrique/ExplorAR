package com.project.digitalBooking.security.auth;

import com.project.digitalBooking.exception.AccountNotVerifiedException;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.DuplicateResourceException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.service.impl.UserServiceImpl;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final UserServiceImpl userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request)
            throws MessagingException, BadRequestException, DuplicateResourceException {
        service.register(request);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(
            @RequestBody AuthenticationRequest request)
            throws BadRequestException, AccountNotVerifiedException, ResourceNotFoundException {
        AuthenticationResponse response = service.authenticate(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyUser(@RequestParam("code") String code) throws BadRequestException {
        if (userService.verify(code)) {
            return ResponseEntity.ok("Verify success");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Verify fail");
        }
    }

    @PostMapping("/resend")
    public ResponseEntity<?> resendVerificationCode(
            @RequestParam("email") String email) {
        try {
            service.resendVerificationEmail(email);
            return ResponseEntity.ok().build();
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (MessagingException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

}