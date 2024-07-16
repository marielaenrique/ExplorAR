package com.project.digitalBooking.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.digitalBooking.entity.Reservation;
import com.project.digitalBooking.entity.Role;
import lombok.*;
import com.project.digitalBooking.entity.Review;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDTO {

    private Long id;
    private String name;
    private String lastName;
    private String email;
    private Role role;
    private List<Review> reviews;
    private List<Reservation> reservations;

}