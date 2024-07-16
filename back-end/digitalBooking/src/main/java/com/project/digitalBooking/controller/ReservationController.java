package com.project.digitalBooking.controller;

import com.project.digitalBooking.entity.dto.ReservationDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.service.impl.ReservationServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/reservation")
public class ReservationController {

    private final ReservationServiceImpl reservationService;

    @PostMapping("/{userId}")
    public ResponseEntity<?> addReservation(@RequestBody ReservationDTO reservationDTO, @PathVariable Long userId)
            throws ResourceNotFoundException {
        ReservationDTO addedReservation = reservationService.addReservation(reservationDTO, userId);
        return ResponseEntity.ok(addedReservation);
    }

    @GetMapping("/{experienceId}")
    public ResponseEntity<?> listReservationByExperienceId(@PathVariable Long experienceId) {
        List<ReservationDTO> reservationDTOS = reservationService.listReservationByExperienceId(experienceId);
        return ResponseEntity.ok(reservationDTOS);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReservation(@PathVariable Long id) throws ResourceNotFoundException {
        reservationService.deleteReservation(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<ReservationDTO> updateReservation(@RequestBody ReservationDTO reservationDTO)
            throws BadRequestException {
        ReservationDTO updatedReservation = reservationService.updateReservation(reservationDTO);
        return ResponseEntity.ok(updatedReservation);
    }

    @GetMapping("/date/{experienceId}")
    ResponseEntity<?> getUnavailableDates(@PathVariable Long experienceId) {
        List<LocalDate> unavailableDates = reservationService.getUnavailableDates(experienceId);
        return ResponseEntity.ok(unavailableDates);
    }

    @GetMapping("/user/{userId}")
    ResponseEntity<?> getReservationsByUserId(@PathVariable Long userId) {
        List<ReservationDTO> reservationDTOS = reservationService.getReservationsByUserId(userId);
        return ResponseEntity.ok(reservationDTOS);
    }

}
