package com.project.digitalBooking.repository;

import com.project.digitalBooking.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    @Query(value = "SELECT r FROM Reservation r WHERE r.experience.id = :experienceId")
    List<Reservation> findAllByExperienceId(Long experienceId);

    @Query(value = "SELECT r FROM Reservation r WHERE r.user.id = :userId")
    List<Reservation> findAllByUserId(Long userId);

}
