package com.project.digitalBooking.service.impl;

import com.project.digitalBooking.entity.Experience;
import com.project.digitalBooking.entity.Review;
import com.project.digitalBooking.entity.User;
import com.project.digitalBooking.entity.dto.ReviewDTO;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.repository.ExperienceRepository;
import com.project.digitalBooking.repository.ReviewRepository;
import com.project.digitalBooking.repository.UserRepository;
import com.project.digitalBooking.service.ReviewService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;
import java.util.List;

@AllArgsConstructor
@Log4j2
@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final ConversionService conversionService;
    private final ExperienceRepository experienceRepository;
    private final UserRepository userRepository;

    @Transactional
    @Override
    public ReviewDTO addReview(ReviewDTO reviewDTO, Long id) throws ResourceNotFoundException {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with ID " + id + " not found"));

        Review review = conversionService.convert(reviewDTO, Review.class);
        review.setUser(user);
        Review savedReview = reviewRepository.save(review);
        log.info("Review added {}", savedReview);

        Long experienceId = savedReview.getExperience().getId();
        Experience experience = experienceRepository.findById(experienceId)
                .orElseThrow(() -> new ResourceNotFoundException("Experience with ID " + experienceId + " not found"));

        List<Review> reviews = experience.getReviews();

        int totalReviews = reviews.size();
        int totalRating = 0;

        for (Review review1 : reviews) {
            totalRating += review1.getRating();
        }
        double averageRating = (double) totalRating / totalReviews;
        experience.setRating(averageRating);

        return conversionService.convert(savedReview, ReviewDTO.class);

    }

}