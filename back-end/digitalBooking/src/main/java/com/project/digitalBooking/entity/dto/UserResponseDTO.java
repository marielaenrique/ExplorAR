package com.project.digitalBooking.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.digitalBooking.entity.Role;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserResponseDTO {

    private Long id;
    private String name;
    private String lastName;
    private String email;
    private Role role;
}