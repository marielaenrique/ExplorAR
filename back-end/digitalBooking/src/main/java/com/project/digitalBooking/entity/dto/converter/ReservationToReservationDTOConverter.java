package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.Reservation;
import com.project.digitalBooking.entity.dto.ReservationDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ReservationToReservationDTOConverter implements Converter<Reservation, ReservationDTO> {

    @Override
    public ReservationDTO convert(Reservation source) {
        ReservationDTO reservationDTO = new ReservationDTO();
        reservationDTO.setId(source.getId());
        reservationDTO.setName(source.getName());
        reservationDTO.setLastName(source.getLastName());
        reservationDTO.setEmail(source.getEmail());
        reservationDTO.setStartingDate(source.getStartingDate());
        reservationDTO.setEndingDate(source.getEndingDate());
        reservationDTO.setExperience(source.getExperience());
        reservationDTO.setUser(source.getUser());
        reservationDTO.setTotalPrice(source.getTotalPrice());
        reservationDTO.setIdentification(source.getIdentification());
        reservationDTO.setUserPhoneNumber(source.getUserPhoneNumber());
        reservationDTO.setUserAddress(source.getUserAddress());
        reservationDTO.setNumberOfPeople(source.getNumberOfPeople());
        return reservationDTO;
    }

}