package com.project.digitalBooking.controller;

import com.project.digitalBooking.entity.Image;
import com.project.digitalBooking.entity.dto.ExperienceDTO;
import com.project.digitalBooking.entity.dto.PageResponseDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.DuplicateResourceException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.service.impl.ExperienceServiceImpl;
import lombok.AllArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.project.digitalBooking.entity.dto.ReviewDTO;
import com.project.digitalBooking.service.impl.ReviewServiceImpl;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/experience")
public class ExperienceController {

    private final ExperienceServiceImpl experienceService;
    private final ReviewServiceImpl reviewService;

    @PostMapping
    public ResponseEntity<ExperienceDTO> addExperience(@RequestBody ExperienceDTO experienceDTO)
            throws DuplicateResourceException {
        ExperienceDTO addedExperience = experienceService.addExperience(experienceDTO);
        return ResponseEntity.ok(addedExperience);
    }

    @GetMapping
    public ResponseEntity<PageResponseDTO<ExperienceDTO>> listExperiences(
            @PageableDefault(size = 10, page = 0) @ParameterObject Pageable pageable) {
        PageResponseDTO<ExperienceDTO> experiences = experienceService.listExperiences(pageable);
        return ResponseEntity.ok(experiences);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExperienceDTO> searchExperience(@PathVariable Long id) throws ResourceNotFoundException {
        ExperienceDTO experience = experienceService.searchExperience(id);
        return ResponseEntity.ok(experience);
    }

    @GetMapping("/images/{experienceId}")
    public ResponseEntity<List<Image>> listExperienceImages(@PathVariable Long experienceId) {
        List<Image> images = experienceService.listExperienceImages(experienceId);
        return ResponseEntity.ok(images);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<PageResponseDTO<ExperienceDTO>> listExperienceByCategory(@PathVariable Long categoryId,
            @PageableDefault(size = 10, page = 0) @ParameterObject Pageable pageable) {
        PageResponseDTO<ExperienceDTO> experiences = experienceService.listExperienceByCategoryId(categoryId, pageable);
        return ResponseEntity.ok(experiences);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteExperience(@PathVariable Long id) throws ResourceNotFoundException {
        experienceService.deleteExperience(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<ExperienceDTO> updateExperience(@RequestBody ExperienceDTO experienceDTO)
            throws BadRequestException {
        ExperienceDTO updatedExperience = experienceService.updateExperience(experienceDTO);
        return ResponseEntity.ok(updatedExperience);
    }

    @PostMapping("/review/{userId}")
    public ResponseEntity<ReviewDTO> addReview(@RequestBody ReviewDTO reviewDTO, @PathVariable Long userId)
            throws ResourceNotFoundException {
        ReviewDTO savedReview = reviewService.addReview(reviewDTO, userId);
        return ResponseEntity.ok(savedReview);
    }

}