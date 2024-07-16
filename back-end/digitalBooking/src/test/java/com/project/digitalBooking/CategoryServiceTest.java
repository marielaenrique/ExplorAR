package com.project.digitalBooking;

import com.project.digitalBooking.entity.*;
import com.project.digitalBooking.entity.dto.CategoryDTO;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.repository.CategoryRepository;
import com.project.digitalBooking.service.impl.CategoryServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.convert.ConversionService;
import org.springframework.test.annotation.DirtiesContext;

import java.util.List;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class CategoryServiceTest {
    
    @InjectMocks
    CategoryServiceImpl categoryService;

    @Mock
    CategoryRepository categoryRepository;
    @Mock
    ConversionService conversionService;

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        categoryService = new CategoryServiceImpl(categoryRepository, conversionService);
    }

    @Test
    public void getListCategories_withValidList_returnList() {

        Experience experience = new Experience(1L, "expTitle", "expDescription", List.of(new Image()), null, "location",
                List.of(new Review()), 5.0, List.of(new Reservation()), 5000.0);
        Category category1 = new Category(1L, "image1", "title1", "description1", List.of(experience));
        Category category2 = new Category(2L, "image2", "title2", "description2", List.of(experience));
        Category category3 = new Category(3L, "image3", "title3", "description3", List.of(experience));

        // When
        Mockito.when(categoryRepository.findAll()).thenReturn(List.of(category1, category2, category3));

        // Given
        List<CategoryDTO> categoryList = categoryService.listCategories();

        // Then
        Assert.assertEquals(3, categoryList.size());
    }

    @Test
    public void deleteCategory_withValidId_categoryDeleted() throws ResourceNotFoundException {

        Long categoryId = 1L;

        // When
        Mockito.when(categoryRepository.existsById(categoryId)).thenReturn(true);

        // Given
        categoryService.deleteCategory(categoryId);

        // Then
        Mockito.verify(categoryRepository, Mockito.times(1)).deleteById(categoryId);
    }

    @Test
    public void addCategory_withValidCategoryDTO_categoryAdded() {

        Experience experience = new Experience(1L, "expTitle", "expDescription", List.of(new Image()), null, "location",
                List.of(new Review()), 5.0, List.of(new Reservation()), 5000.0);
        CategoryDTO categoryDTO = new CategoryDTO(4L, "image4", "title4", "description4", List.of(new Experience()));
        Category category1 = new Category(1L, "image1", "title1", "description1", List.of(experience));

        // When
        Mockito.when(conversionService.convert(categoryDTO, Category.class)).thenReturn(category1);
        Mockito.when(categoryRepository.save(Mockito.any(Category.class))).thenReturn(category1);
        Mockito.when(conversionService.convert(category1, CategoryDTO.class)).thenReturn(categoryDTO);

        // Given
        CategoryDTO addedCategoryDTO = categoryService.addCategory(categoryDTO);

        // Then
        Assert.assertEquals("title4", addedCategoryDTO.getTitle());
        Assert.assertNotNull(addedCategoryDTO);
        Mockito.verify(categoryRepository, Mockito.times(1)).save(Mockito.any(Category.class));
    }

}
