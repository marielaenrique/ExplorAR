package com.project.digitalBooking.service;

import com.project.digitalBooking.entity.Image;
import com.project.digitalBooking.entity.dto.ExperienceDTO;
import com.project.digitalBooking.entity.dto.PageResponseDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.DuplicateResourceException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ExperienceService {

    PageResponseDTO<ExperienceDTO> listExperiences(Pageable pageable);

    PageResponseDTO<ExperienceDTO> listExperienceByCategoryId(Long categoryId, Pageable pageable);

    List<Image> listExperienceImages(Long experienceId);

    ExperienceDTO searchExperience(Long id) throws ResourceNotFoundException;

    ExperienceDTO addExperience(ExperienceDTO experienceDTO) throws BadRequestException, DuplicateResourceException;

    void deleteExperience(Long id) throws ResourceNotFoundException;

    ExperienceDTO updateExperience(ExperienceDTO experienceDTO) throws BadRequestException;

}
