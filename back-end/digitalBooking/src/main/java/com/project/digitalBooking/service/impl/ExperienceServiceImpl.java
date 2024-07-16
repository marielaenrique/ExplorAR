package com.project.digitalBooking.service.impl;

import com.project.digitalBooking.entity.Experience;
import com.project.digitalBooking.entity.Image;
import com.project.digitalBooking.entity.dto.ExperienceDTO;
import com.project.digitalBooking.entity.dto.PageResponseDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.DuplicateResourceException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.repository.ExperienceRepository;
import com.project.digitalBooking.repository.ImageRepository;
import com.project.digitalBooking.service.ExperienceService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Log4j2
@Service
public class ExperienceServiceImpl implements ExperienceService {

    private final ExperienceRepository experienceRepository;
    private final ImageRepository imageRepository;
    private final ConversionService conversionService;

    @Override
    public PageResponseDTO<ExperienceDTO> listExperiences(Pageable pageable) {
        Page<Experience> experiencePage = experienceRepository.findAll(pageable);
        return new PageResponseDTO<ExperienceDTO>(
                experiencePage.getContent().stream()
                        .map(experience -> conversionService.convert(experience, ExperienceDTO.class))
                        .collect(Collectors.toList()),
                experiencePage.getPageable(), experiencePage.getTotalElements());
    }

    @Override
    public PageResponseDTO<ExperienceDTO> listExperienceByCategoryId(Long categoryId, Pageable pageable) {
        Page<Experience> experiencePage = experienceRepository.findAllByCategoryId(categoryId, pageable);
        return new PageResponseDTO<>(
                experiencePage.getContent().stream()
                        .map(experience -> conversionService.convert(experience, ExperienceDTO.class))
                        .collect(Collectors.toList()),
                experiencePage.getPageable(), experiencePage.getTotalElements());
    }

    @Override
    public List<Image> listExperienceImages(Long experienceId) {
        return imageRepository.findAllByExperienceId(experienceId);
    }

    @Override
    public ExperienceDTO searchExperience(Long id) throws ResourceNotFoundException {
        Experience experience = experienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Experience with ID " + id + " not found"));
        log.info("Experience found: {}", experience);
        return conversionService.convert(experience, ExperienceDTO.class);
    }

    @Override
    public ExperienceDTO addExperience(ExperienceDTO experienceDTO) throws DuplicateResourceException {
        if (experienceRepository.findByTitle(experienceDTO.getTitle()).isPresent()) {
            throw new DuplicateResourceException("An experience with this title already exists.");
        }

        Experience experience = conversionService.convert(experienceDTO, Experience.class);
        Experience savedExperience = experienceRepository.save(experience);

        List<Image> images = experienceDTO.getImages();
        images.forEach(image -> {
            image.setExperience(savedExperience);
            imageRepository.save(image);

        });

        log.info("Experience added: {}", savedExperience);
        return conversionService.convert(savedExperience, ExperienceDTO.class);
    }

    @Override
    public void deleteExperience(Long id) throws ResourceNotFoundException {
        if (!experienceRepository.existsById(id)) {
            throw new ResourceNotFoundException("Experience with ID " + id + " does not exist");
        }

        List<Image> images = imageRepository.findAllByExperienceId(id);
        images.forEach(image -> {
            imageRepository.deleteById(image.getId());
            log.info("Image with ID {} deleted", image.getId());
        });

        experienceRepository.deleteById(id);
        log.info("Experience with ID {} deleted", id);
    }

    @Override
    public ExperienceDTO updateExperience(ExperienceDTO experienceDTO) throws BadRequestException {
        experienceRepository.findById(experienceDTO.getId())
                .orElseThrow(
                        () -> new BadRequestException("Experience with ID " + experienceDTO.getId() + " not found"));

        Experience experience = conversionService.convert(experienceDTO, Experience.class);
        experienceRepository.save(experience);

        return conversionService.convert(experience, ExperienceDTO.class);
    }
    
}