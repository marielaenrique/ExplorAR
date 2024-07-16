package com.project.digitalBooking.service.impl;

import com.project.digitalBooking.entity.Category;
import com.project.digitalBooking.entity.dto.CategoryDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.repository.CategoryRepository;
import com.project.digitalBooking.service.CategoryService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@AllArgsConstructor
@Service
public class CategoryServiceImpl implements CategoryService {

	private final CategoryRepository categoryRepository;
	private final ConversionService conversionService;

	@Override
	public List<CategoryDTO> listCategories() {
		List<Category> categories = categoryRepository.findAll();
		List<CategoryDTO> categoriesDTOS = new ArrayList<>();
		for (Category category : categories) {
			categoriesDTOS.add(conversionService.convert(category, CategoryDTO.class));
		}
		return categoriesDTOS;
	}

	@Override
	public CategoryDTO searchCategory(Long id) throws ResourceNotFoundException {
		Category category = categoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category with ID " + id + " not found"));
		log.info("Category found: {}", category);
		return conversionService.convert(category, CategoryDTO.class);
	}

	@Override
	public CategoryDTO addCategory(CategoryDTO categoryDTO) {
		Category category = conversionService.convert(categoryDTO, Category.class);
		Category savedCategory = categoryRepository.save(category);
		log.info("Category added: {}", savedCategory);
		return conversionService.convert(savedCategory, CategoryDTO.class);
	}

	@Override
	public void deleteCategory(Long id) throws ResourceNotFoundException {
		if (!categoryRepository.existsById(id)) {
			throw new ResourceNotFoundException("Category with ID " + id + " does not exist");
		}
		categoryRepository.deleteById(id);
		log.info("Category with ID {} deleted", id);
	}

	@Override
	public CategoryDTO updateCategory(CategoryDTO categoryDTO) throws BadRequestException {
		categoryRepository.findById(categoryDTO.getId())
				.orElseThrow(() -> new BadRequestException("Category with ID " + categoryDTO.getId() + " not found"));

		Category category = conversionService.convert(categoryDTO, Category.class);
		categoryRepository.save(category);

		return conversionService.convert(category, CategoryDTO.class);
	}

}
