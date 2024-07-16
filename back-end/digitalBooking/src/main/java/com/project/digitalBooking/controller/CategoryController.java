package com.project.digitalBooking.controller;

import com.project.digitalBooking.entity.dto.CategoryDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.service.impl.CategoryServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/category")
public class CategoryController {

    private final CategoryServiceImpl categoryService;

    @PostMapping
    public ResponseEntity<CategoryDTO> addCategory(@RequestBody CategoryDTO categoryDTO) {
        CategoryDTO addedCategory = categoryService.addCategory(categoryDTO);
        return ResponseEntity.ok(addedCategory);
    }

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> listCategories() {
        List<CategoryDTO> categories = categoryService.listCategories();
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDTO> searchCategory(@PathVariable Long id) throws ResourceNotFoundException {
        CategoryDTO category = categoryService.searchCategory(id);
        return ResponseEntity.ok(category);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) throws ResourceNotFoundException {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<CategoryDTO> updateCategory(@RequestBody CategoryDTO categoryDTO) throws BadRequestException {
        CategoryDTO updatedCategory = categoryService.updateCategory(categoryDTO);
        return ResponseEntity.ok(updatedCategory);
    }

}