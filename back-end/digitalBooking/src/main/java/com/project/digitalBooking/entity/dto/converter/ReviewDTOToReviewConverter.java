package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.Review;
import com.project.digitalBooking.entity.dto.ReviewDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ReviewDTOToReviewConverter implements Converter<ReviewDTO, Review> {

    @Override
    public Review convert(ReviewDTO source) {
        Review review = new Review();
        review.setId(source.getId());
        review.setExperience(source.getExperience());
        review.setRating(source.getRating());
        review.setUser(source.getUser());
        return review;
    }

}