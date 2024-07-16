package com.project.digitalBooking.service;

import com.project.digitalBooking.entity.dto.CategoryDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.ResourceNotFoundException;

import java.util.*;

public interface CategoryService {

   List<CategoryDTO> listCategories();

   CategoryDTO searchCategory(Long id) throws ResourceNotFoundException;

   CategoryDTO addCategory(CategoryDTO categoryDTO);

   void deleteCategory(Long id) throws ResourceNotFoundException;

   CategoryDTO updateCategory(CategoryDTO categoryDTO) throws BadRequestException;

}
