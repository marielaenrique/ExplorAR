package com.project.digitalBooking.service.impl;

import com.project.digitalBooking.entity.User;
import com.project.digitalBooking.entity.dto.PageResponseDTO;
import com.project.digitalBooking.entity.dto.UserDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.repository.UserRepository;
import com.project.digitalBooking.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import com.project.digitalBooking.entity.dto.UserResponseDTO;
import java.util.stream.Collectors;

@Log4j2
@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ConversionService conversionService;

    @Override
    public UserDTO searchUser(Long id) throws BadRequestException {

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String authenticatedUsername = userDetails.getUsername();

        User user = userRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("User with ID " + id + " not found"));

        if (!user.getUsername().equals(authenticatedUsername)) {
            throw new BadRequestException("Access Forbidden");
        }

        log.info("User found: {}", user);
        UserDTO userDTO = conversionService.convert(user, UserDTO.class);
        return userDTO;
    }

    @Override
    public UserResponseDTO searchUserByEmail(String email) throws BadRequestException {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new BadRequestException("User with email " + email + " not found"));

        log.info("User found: {}", user);
        UserResponseDTO userResponseDTO = conversionService.convert(user, UserResponseDTO.class);
        return userResponseDTO;
    }

    @Override
    public PageResponseDTO<UserDTO> listUsers(Pageable pageable) {
        Page<User> userPage = userRepository.findAll(pageable);
        return new PageResponseDTO<>(
                userPage.getContent().stream()
                        .map(user -> conversionService.convert(user, UserDTO.class))
                        .collect(Collectors.toList()),
                userPage.getPageable(), userPage.getTotalElements());

    }

    @Override
    public UserDTO updateUser(UserDTO userDTO) throws BadRequestException {
        User existingUser = userRepository.findById(userDTO.getId())
                .orElseThrow(() -> new BadRequestException("User with ID " + userDTO.getId() + " not found"));

        existingUser.setName(userDTO.getName());
        existingUser.setLastName(userDTO.getLastName());
        existingUser.setEmail(userDTO.getEmail());
        existingUser.setRole(userDTO.getRole());

        User updatedUser = userRepository.save(existingUser);

        UserDTO updatedUserDTO = conversionService.convert(updatedUser, UserDTO.class);
        return updatedUserDTO;
    }

    @Override
    public boolean verify(String verificationCode) throws BadRequestException {
        User user = userRepository.findByVerificationCode(verificationCode);
        if (user == null) {
            throw new BadRequestException("Invalid verification code");
        }
        if (user.isVerified()) {
            throw new BadRequestException("User already verified");
        }
        user.setVerified(true);
        userRepository.save(user);
        return true;
    }

}