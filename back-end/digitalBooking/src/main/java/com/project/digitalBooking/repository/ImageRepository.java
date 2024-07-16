package com.project.digitalBooking.repository;

import com.project.digitalBooking.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

   @Query("SELECT i FROM Image i WHERE i.experience.id = ?1")
   List<Image> findAllByExperienceId(Long experienceId);
   
}
