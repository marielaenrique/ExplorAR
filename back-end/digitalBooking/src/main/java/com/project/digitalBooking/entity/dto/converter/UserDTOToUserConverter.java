package com.project.digitalBooking.entity.dto.converter;

import com.project.digitalBooking.entity.User;
import com.project.digitalBooking.entity.dto.UserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class UserDTOToUserConverter implements Converter<UserDTO, User> {

    @Override
    public User convert(UserDTO source) {
        User user = new User();
        user.setId(source.getId());
        user.setName(source.getName());
        user.setLastName(source.getLastName());
        user.setEmail(source.getEmail());
        user.setRole(source.getRole());
        user.setReviews(source.getReviews());
        return user;
    }

}