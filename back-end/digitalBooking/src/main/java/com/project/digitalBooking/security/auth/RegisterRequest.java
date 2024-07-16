package com.project.digitalBooking.security.auth;

import com.project.digitalBooking.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotEmpty;
import org.hibernate.validator.constraints.Length;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    @NotEmpty
    @Pattern(regexp = "^[^0-9\\s][^0-9]*[^0-9\\s]$")
    @Length(min = 3, max = 30)
    private String name;

    @NotEmpty
    @Pattern(regexp = "^[^0-9\\s][^0-9]*[^0-9\\s]$")
    @Length(min = 3, max = 30)
    private String lastname;

    @NotEmpty
    @Email(regexp = "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")
    private String email;

    @NotEmpty
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)\\S+$")
    @Length(min = 6, max = 20)
    private String password;

    private Role role;

}