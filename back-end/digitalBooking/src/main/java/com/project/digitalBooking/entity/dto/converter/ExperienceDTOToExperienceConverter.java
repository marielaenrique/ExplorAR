package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.Experience;
import com.project.digitalBooking.entity.dto.ExperienceDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ExperienceDTOToExperienceConverter implements Converter<ExperienceDTO, Experience> {

	@Override
	public Experience convert(ExperienceDTO source) {
		Experience experience = new Experience();
		experience.setId(source.getId());
		experience.setTitle(source.getTitle());
		experience.setDescription(source.getDescription());
		experience.setCategory(source.getCategory());
		experience.setLocation(source.getLocation());
		experience.setImages(source.getImages());
		experience.setRating(source.getRating());
		experience.setReviews(source.getReviews());
		experience.setPricePerDay(source.getPricePerDay());
		return experience;
	}

}