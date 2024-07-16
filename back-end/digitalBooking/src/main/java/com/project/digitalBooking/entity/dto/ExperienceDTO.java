package com.project.digitalBooking.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.project.digitalBooking.entity.Category;
import com.project.digitalBooking.entity.Image;
import com.project.digitalBooking.entity.Reservation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.project.digitalBooking.entity.Review;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ExperienceDTO {

    private Long id;
    private String title;
    private String description;
    private List<Image> images;
    private Category category;
    private String location;
    private List<Review> reviews;
    private double rating;
    private List<Reservation> reservations;
    private Double pricePerDay;

    @JsonProperty("category")
    public Long getCategoryId() {
        if (category != null) {
            return category.getId();
        }
        return null;
    }
    
}