package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.Category;
import com.project.digitalBooking.entity.dto.CategoryDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class CategoryToCategoryDTOConverter implements Converter<Category, CategoryDTO> {

    @Override
    public CategoryDTO convert(Category source) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(source.getId());
        categoryDTO.setImage(source.getImage());
        categoryDTO.setTitle(source.getTitle());
        categoryDTO.setDescription(source.getDescription());
        categoryDTO.setExperiences(source.getExperiences());
        return categoryDTO;
    }

}