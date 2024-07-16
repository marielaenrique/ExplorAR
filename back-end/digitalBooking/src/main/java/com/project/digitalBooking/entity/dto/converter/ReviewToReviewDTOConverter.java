package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.Review;
import com.project.digitalBooking.entity.dto.ReviewDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ReviewToReviewDTOConverter implements Converter<Review, ReviewDTO> {

    @Override
    public ReviewDTO convert(Review source) {
        ReviewDTO reviewDTO = new ReviewDTO();
        reviewDTO.setId(source.getId());
        reviewDTO.setExperience(source.getExperience());
        reviewDTO.setRating(source.getRating());
        reviewDTO.setUser(source.getUser());
        return reviewDTO;
    }

}