package com.project.digitalBooking.repository;

import com.project.digitalBooking.entity.Experience;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;
import java.util.Optional;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {

   @Query("SELECT e FROM Experience e WHERE e.title = :title")
   Optional<Experience> findByTitle(@Param("title") String title);

   @Query(value = "SELECT e FROM Experience e WHERE e.category.id = :categoryId", countQuery = "SELECT COUNT(*) FROM Experience e WHERE e.category.id = :categoryId")
   Page<Experience> findAllByCategoryId(@Param("categoryId") Long categoryId, Pageable pageable);

}
