package com.project.digitalBooking.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private String email;
    private LocalDate startingDate;
    private LocalDate endingDate;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "experience_id")
    private Experience experience;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
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

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", startingDate=" + startingDate +
                ", endingDate=" + endingDate +
                '}';
    }

}