package com.project.digitalBooking.service;

import com.project.digitalBooking.entity.dto.ReservationDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import java.time.LocalDate;
import java.util.List;

public interface ReservationService {

    ReservationDTO addReservation(ReservationDTO reservationDTO, Long userId) throws ResourceNotFoundException;

    List<ReservationDTO> listReservationByExperienceId(Long experienceId);

    void deleteReservation(Long id) throws ResourceNotFoundException;

    ReservationDTO updateReservation(ReservationDTO reservationDTO) throws BadRequestException;

    List<LocalDate> getUnavailableDates(Long experienceId);

    List<ReservationDTO> getReservationsByUserId(Long userId);

}