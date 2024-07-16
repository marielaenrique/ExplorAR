package com.project.digitalBooking.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.project.digitalBooking.entity.Experience;
import com.project.digitalBooking.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReviewDTO {

    private Long id;
    private Experience experience;
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

}