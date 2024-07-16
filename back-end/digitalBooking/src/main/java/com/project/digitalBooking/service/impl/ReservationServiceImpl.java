package com.project.digitalBooking.service.impl;

import com.project.digitalBooking.entity.Experience;
import com.project.digitalBooking.entity.Reservation;
import com.project.digitalBooking.entity.User;
import com.project.digitalBooking.entity.dto.ReservationDTO;
import com.project.digitalBooking.exception.BadRequestException;
import com.project.digitalBooking.exception.ResourceNotFoundException;
import com.project.digitalBooking.repository.ExperienceRepository;
import com.project.digitalBooking.repository.ReservationRepository;
import com.project.digitalBooking.repository.UserRepository;
import com.project.digitalBooking.service.ReservationService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Log4j2
@Service
public class ReservationServiceImpl implements ReservationService {

    private final ConversionService conversionService;
    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final ExperienceRepository experienceRepository;

    @Override
    public ReservationDTO addReservation(ReservationDTO reservationDTO, Long userId)
            throws ResourceNotFoundException, IllegalArgumentException {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with ID " + userId + " not found"));

        Reservation reservation = conversionService.convert(reservationDTO, Reservation.class);

        LocalDate startDate = reservation.getStartingDate();
        LocalDate endDate = reservation.getEndingDate();
        LocalDate currentDate = LocalDate.now();
        long totalDays = ChronoUnit.DAYS.between(startDate, endDate);

        if (startDate.isBefore(currentDate) || endDate.isBefore(currentDate) || totalDays < 0) {
            throw new IllegalArgumentException("Invalid date range");
        }

        if (!isDateRangeAvailable(startDate, endDate, reservationDTO.getExperienceId())) {
            throw new IllegalArgumentException("Date range is not available");
        }

        double totalPrice = calculateTotalPrice(reservationDTO.getExperienceId(), totalDays + 1);

        reservation.setTotalPrice(totalPrice);

        reservation.setUser(user);
        Reservation savedReservation = reservationRepository.save(reservation);

        log.info("Reservation added: {}", savedReservation);
        return conversionService.convert(savedReservation, ReservationDTO.class);
    }

    @Override
    public List<ReservationDTO> listReservationByExperienceId(Long experienceId) {

        List<Reservation> reservations = reservationRepository.findAllByExperienceId(experienceId);
        List<ReservationDTO> reservationDTOS = new ArrayList<>();
        for (Reservation reservation : reservations) {
            reservationDTOS.add(conversionService.convert(reservation, ReservationDTO.class));
        }
        return reservationDTOS;
    }

    @Override
    public void deleteReservation(Long id) throws ResourceNotFoundException {
        if (!reservationRepository.existsById(id)) {
            throw new ResourceNotFoundException("Reservation with ID " + id + " does not exist");
        }
        reservationRepository.deleteById(id);
        log.info("Reservation with ID {} deleted", id);
    }

    @Override
    public ReservationDTO updateReservation(ReservationDTO reservationDTO) throws BadRequestException {
        Reservation existingReservation = reservationRepository.findById(reservationDTO.getId())
                .orElseThrow(
                        () -> new BadRequestException("Reservation with ID " + reservationDTO.getId() + " not found"));

        existingReservation.setName(reservationDTO.getName());
        existingReservation.setLastName(reservationDTO.getLastName());
        existingReservation.setEmail(reservationDTO.getEmail());
        existingReservation.setStartingDate(reservationDTO.getStartingDate());
        existingReservation.setEndingDate(reservationDTO.getEndingDate());
        existingReservation.setIdentification(reservationDTO.getIdentification());
        existingReservation.setUserPhoneNumber(reservationDTO.getUserPhoneNumber());
        existingReservation.setUserAddress(reservationDTO.getUserAddress());
        existingReservation.setNumberOfPeople(reservationDTO.getNumberOfPeople());

        Reservation updatedReservation = reservationRepository.save(existingReservation);

        return conversionService.convert(updatedReservation, ReservationDTO.class);
    }

    @Override
    public List<LocalDate> getUnavailableDates(Long experienceId) {
        List<Reservation> reservations = reservationRepository.findAllByExperienceId(experienceId);
        List<LocalDate> unavailableDates = new ArrayList<>();

        for (Reservation reservation : reservations) {
            List<LocalDate> reservationDates = getAllDates(reservation);
            unavailableDates.addAll(reservationDates);
        }

        return unavailableDates;
    }

    private List<LocalDate> getAllDates(Reservation reservation) {
        LocalDate startDate = reservation.getStartingDate();
        LocalDate endDate = reservation.getEndingDate();

        List<LocalDate> allDates = new ArrayList<>();
        LocalDate date = startDate;

        while (!date.isAfter(endDate)) {
            allDates.add(date);
            date = date.plusDays(1);
        }

        return allDates;

    }

    @Override
    public List<ReservationDTO> getReservationsByUserId(Long userId) {
        List<Reservation> reservations = reservationRepository.findAllByUserId(userId);
        List<ReservationDTO> reservationDTOS = new ArrayList<>();

        for (Reservation reservation : reservations) {
            ReservationDTO reservationDTO = conversionService.convert(reservation, ReservationDTO.class);
            reservationDTOS.add(reservationDTO);
        }

        return reservationDTOS;
    }

    private boolean isDateRangeAvailable(LocalDate startDate, LocalDate endDate, Long experienceId)
            throws IllegalArgumentException {
        List<Reservation> reservations = reservationRepository.findAllByExperienceId(experienceId);
        for (Reservation reservation : reservations) {
            LocalDate reservationStartDate = reservation.getStartingDate();
            LocalDate reservationEndDate = reservation.getEndingDate();

            boolean startDateConflict = startDate.isBefore(reservationEndDate)
                    && !endDate.isBefore(reservationStartDate);
            boolean endDateConflict = !startDate.isAfter(reservationEndDate) && endDate.isAfter(reservationStartDate);
            boolean sameDateConflict = startDate.equals(reservationStartDate) && endDate.equals(reservationEndDate);

            if (startDateConflict || endDateConflict || sameDateConflict) {
                return false;
            }
        }
        return true;
    }

    private double calculateTotalPrice(Long experienceId, long totalDays) throws ResourceNotFoundException {
        Experience experience = experienceRepository.findById(experienceId)
                .orElseThrow(() -> new ResourceNotFoundException("Experience with ID " + experienceId + " not found"));
        double pricePerDay = experience.getPricePerDay();

        return totalDays * pricePerDay;
    }

}
