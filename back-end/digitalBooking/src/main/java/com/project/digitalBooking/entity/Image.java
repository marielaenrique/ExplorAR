package com.project.digitalBooking.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Image {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String url;
   @ManyToOne
   @JoinColumn(name = "experience_id")
   private Experience experience;

   @JsonProperty("experience")
   public Long getCategoryId() {
      if (experience != null) {
         return experience.getId();
      }
      return null;
   }

   @Override
   public String toString() {
      return "Image{" +
            "id=" + id +
            ", url='" + url + '\'' +
            '}';
   }

}
