package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.Category;
import com.project.digitalBooking.entity.dto.CategoryDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class CategoryDTOToCategoryConverter implements Converter<CategoryDTO, Category> {

    @Override
    public Category convert(CategoryDTO source) {
        Category category = new Category();
        category.setId(source.getId());
        category.setImage(source.getImage());
        category.setTitle(source.getTitle());
        category.setDescription(source.getDescription());
        category.setExperiences(source.getExperiences());
        return category;
    }

}