package com.project.digitalBooking.service;

import com.project.digitalBooking.entity.dto.PageResponseDTO;
import com.project.digitalBooking.entity.dto.UserDTO;
import com.project.digitalBooking.exception.BadRequestException;
import org.springframework.data.domain.Pageable;
import com.project.digitalBooking.entity.dto.UserResponseDTO;

public interface UserService {
    
    UserDTO searchUser(Long id) throws BadRequestException;

    UserResponseDTO searchUserByEmail(String email) throws BadRequestException;

    PageResponseDTO<UserDTO> listUsers(Pageable pageable);

    UserDTO updateUser(UserDTO userDTO) throws BadRequestException;

    boolean verify(String verificationCode) throws BadRequestException;

}