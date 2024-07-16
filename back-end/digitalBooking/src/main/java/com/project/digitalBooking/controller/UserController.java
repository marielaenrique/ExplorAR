package com.project.digitalBooking.controller;

import com.project.digitalBooking.entity.dto.PageResponseDTO;
import com.project.digitalBooking.entity.dto.UserDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.service.impl.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserServiceImpl userServiceImpl;

    @GetMapping("/getById/{id}")
    public ResponseEntity<UserDTO> searchUser(@PathVariable Long id) throws BadRequestException {
        UserDTO userDTO = userServiceImpl.searchUser(id);
        return ResponseEntity.ok(userDTO);
    }

    @GetMapping
    public ResponseEntity<PageResponseDTO<UserDTO>> listUsers(
            @PageableDefault(size = 10, page = 0) @ParameterObject Pageable pageable) {
        PageResponseDTO<UserDTO> userPage = userServiceImpl.listUsers(pageable);
        return ResponseEntity.ok(userPage);
    }

    @PutMapping("/update")
    public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO userDTO) throws BadRequestException {
        UserDTO updatedUser = userServiceImpl.updateUser(userDTO);
        return ResponseEntity.ok(updatedUser);
    }

}