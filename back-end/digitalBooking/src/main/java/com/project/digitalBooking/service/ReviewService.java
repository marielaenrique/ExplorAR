package com.project.digitalBooking.service;

import com.project.digitalBooking.entity.dto.ReviewDTO;
import com.project.digitalBooking.exception.ResourceNotFoundException;

public interface ReviewService {

    ReviewDTO addReview(ReviewDTO reviewDTO, Long id) throws ResourceNotFoundException;

}