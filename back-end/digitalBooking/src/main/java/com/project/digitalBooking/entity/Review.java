package com.project.digitalBooking.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "experience_id")
    private Experience experience;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
    private int rating;

    @JsonProperty("user")
    public Long getUserId() {
        if (user != null) {
            return user.getId();
        }
        return null;
    }

    @JsonProperty("experience")
    public Long getExperienceId() {
        if (experience != null) {
            return experience.getId();
        }
        return null;
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", rating=" + rating +
                '}';
    }
}