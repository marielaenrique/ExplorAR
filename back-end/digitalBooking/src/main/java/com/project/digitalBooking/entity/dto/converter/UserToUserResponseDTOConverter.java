package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.User;
import com.project.digitalBooking.entity.dto.UserResponseDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class UserToUserResponseDTOConverter implements Converter<User, UserResponseDTO> {

    @Override
    public UserResponseDTO convert(User source) {

        UserResponseDTO userResponseDTO = new UserResponseDTO();
        userResponseDTO.setId(source.getId());
        userResponseDTO.setName(source.getName());
        userResponseDTO.setLastName(source.getLastName());
        userResponseDTO.setEmail(source.getEmail());
        userResponseDTO.setRole(source.getRole());
        return userResponseDTO;
    }

}