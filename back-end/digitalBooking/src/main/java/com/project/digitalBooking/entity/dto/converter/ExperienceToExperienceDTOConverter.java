package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.Experience;
import com.project.digitalBooking.entity.dto.ExperienceDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ExperienceToExperienceDTOConverter implements Converter<Experience, ExperienceDTO> {

	@Override
	public ExperienceDTO convert(Experience source) {
		ExperienceDTO experienceDTO = new ExperienceDTO();
		experienceDTO.setId(source.getId());
		experienceDTO.setTitle(source.getTitle());
		experienceDTO.setDescription(source.getDescription());
		experienceDTO.setCategory(source.getCategory());
		experienceDTO.setLocation(source.getLocation());
		experienceDTO.setImages(source.getImages());
		experienceDTO.setRating(source.getRating());
		experienceDTO.setReviews(source.getReviews());
		experienceDTO.setPricePerDay(source.getPricePerDay());
		return experienceDTO;
	}

}