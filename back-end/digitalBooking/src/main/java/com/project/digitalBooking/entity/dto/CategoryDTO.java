package com.project.digitalBooking.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.digitalBooking.entity.Experience;
import lombok.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoryDTO {

   private Long id;
   private String image;
   private String title;
   private String description;
   private List<Experience> experiences;

}