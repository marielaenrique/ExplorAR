package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.Reservation;
import com.project.digitalBooking.entity.dto.ReservationDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ReservationDTOToReservationConverter implements Converter<ReservationDTO, Reservation> {

    @Override
    public Reservation convert(ReservationDTO source) {
        Reservation reservation = new Reservation();
        reservation.setId(source.getId());
        reservation.setName(source.getName());
        reservation.setLastName(source.getLastName());
        reservation.setEmail(source.getEmail());
        reservation.setStartingDate(source.getStartingDate());
        reservation.setEndingDate(source.getEndingDate());
        reservation.setExperience(source.getExperience());
        reservation.setUser(source.getUser());
        reservation.setTotalPrice(source.getTotalPrice());
        reservation.setIdentification(source.getIdentification());
        reservation.setUserPhoneNumber(source.getUserPhoneNumber());
        reservation.setUserAddress(source.getUserAddress());
        reservation.setNumberOfPeople(source.getNumberOfPeople());
        return reservation;
    }

}