package com.project.digitalBooking.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.project.digitalBooking.entity.Experience;
import com.project.digitalBooking.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReservationDTO {

    private Long id;
    private String name;
    private String lastName;
    private String email;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate startingDate;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate endingDate;
    private Experience experience;
    private User user;
    private Double totalPrice;
    private Integer identification;
    private String userPhoneNumber;
    private String userAddress;
    private Integer numberOfPeople;

    @JsonProperty("experience")
    public Long getExperienceId() {
        if (experience != null) {
            return experience.getId();
        }
        return null;
    }

    @JsonProperty("user")
    public Long getUserId() {
        if (user != null) {
            return user.getId();
        }
        return null;
    }

}