package com.project.digitalBooking.security.auth;

import com.project.digitalBooking.entity.User;
import com.project.digitalBooking.exception.AccountNotVerifiedException;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.DuplicateResourceException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.repository.UserRepository;
import com.project.digitalBooking.security.config.JwtService;
import com.project.digitalBooking.security.token.Token;
import com.project.digitalBooking.security.token.TokenRepository;
import com.project.digitalBooking.security.token.TokenType;
import com.project.digitalBooking.service.impl.EmailServiceImpl;
import com.project.digitalBooking.service.impl.UserServiceImpl;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.project.digitalBooking.entity.dto.UserResponseDTO;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;
    private final EmailServiceImpl emailService;
    private final UserServiceImpl userService;

    public void register(RegisterRequest request)
            throws MessagingException, BadRequestException, DuplicateResourceException {

        if (repository.findByEmail(request.getEmail()).isPresent()) {
            throw new DuplicateResourceException("The email is already registered");
        }

        String randomCode = UUID.randomUUID().toString();
        var user = User.builder()
                .name(request.getName())
                .lastName(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .verificationCode(randomCode)
                .verified(false)
                .build();
        repository.save(user);
        sendVerificationEmail(user);

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request)
            throws AccountNotVerifiedException, ResourceNotFoundException, BadRequestException {
        System.out.println(request);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(
                        () -> new ResourceNotFoundException("User with email " + request.getEmail() + " not found"));

        UserResponseDTO userResponseDTO = userService.searchUserByEmail(user.getEmail());

        boolean verified = user.isVerified();
        if (!verified) {
            throw new AccountNotVerifiedException("Account not verified");
        }
        var jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .userInfo(userResponseDTO)
                .build();
    }

    private void sendVerificationEmail(User user) throws MessagingException {
        String toAddress = user.getEmail();
        String subject = "Confirma tu cuenta de ExplorAR";
        String body = "<html>"
                + "<head>"
                + "<style>"
                + "body { font-family: Arial, sans-serif; }"
                + "h3 { color: #333333; }"
                + "p { color: #555555; }"
                + "strong { color: #007F5F }"
                + "a, a:link, a:visited { color: #007F5F; text-decoration: none; }"
                + "</style>"
                + "</head>"
                + "<body>"
                + "<h3>¡Hola [[username]], gracias por registrarte y crear una cuenta en ExplorAR!</h3>"
                + "<p>Para comenzar a disfrutar de nuestra plataforma, solo necesitas confirmar tu dirección de correo electrónico haciendo clic en el siguiente enlace:</p>"
                + "<p><a href=\"[[URL]]\" target=\"_self\"><strong>CONFIRMAR DIRECCIÓN DE CORREO</strong></a></p>"
                + "<p><em>Si no te has registrado en ExplorAR y crees que este correo ha sido enviado por error, por favor contáctanos de inmediato para resolver el problema.</em></p>"
                + "<p>¡Bienvenido/a a ExplorAR! Estamos emocionados de tenerte como parte de nuestra comunidad.</p>"
                + "<p>Saludos cordiales,<br><em>El equipo de ExplorAR</em></p>"
                + "</body>"
                + "</html>";

        body = body.replace("[[username]]", user.getName());
        String verifyURL = "http://explor-ar-c5-g5.s3-website.us-east-2.amazonaws.com" + "/verify/" + user.getVerificationCode();
        body = body.replace("[[URL]]", verifyURL);

        emailService.sendEmail(toAddress, subject, body);
    }

    public void resendVerificationEmail(String email) throws ResourceNotFoundException, MessagingException {
        User user = repository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        sendVerificationEmail(user);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findALlValidTokens(user.getId());
        if (validUserTokens.isEmpty()) {
            return;
        }
        validUserTokens.forEach(t -> {
            t.setExpired(true);
            t.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

}