package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.User;
import com.project.digitalBooking.entity.dto.UserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class UserToUserDTOConverter implements Converter<User, UserDTO> {

    @Override
    public UserDTO convert(User source) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(source.getId());
        userDTO.setName(source.getName());
        userDTO.setLastName(source.getLastName());
        userDTO.setEmail(source.getEmail());
        userDTO.setRole(source.getRole());
        userDTO.setReviews(source.getReviews());
        return userDTO;
    }

}