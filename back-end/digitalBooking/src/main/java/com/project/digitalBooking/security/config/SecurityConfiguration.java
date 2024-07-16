package com.project.digitalBooking.security.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.List;
import static com.project.digitalBooking.entity.Role.ADMIN;
import static com.project.digitalBooking.entity.Role.USER;
import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {
    
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .csrf()
                .disable()
                .authorizeHttpRequests()
                .requestMatchers(
                        "/api/v1/auth/**",
                        "/v2/api-docs",
                        "/v3/api-docs",
                        "/v3/api-docs/**",
                        "/swagger-resources",
                        "/swagger-resources/**",
                        "/configuration/ui",
                        "/configuration/security",
                        "/swagger-ui/**",
                        "/webjars/**",
                        "/swagger-ui/.html")
                .permitAll()

                .requestMatchers(GET, "/api/v1/experience/**").permitAll()
                .requestMatchers(POST, "/api/v1/experience/review/**").hasAnyAuthority(ADMIN.name(), USER.name())
                .requestMatchers(POST, "/api/v1/experience/**").hasAuthority(ADMIN.name())
                .requestMatchers(PUT, "/api/v1/experience/**").hasAuthority(ADMIN.name())
                .requestMatchers(DELETE, "/api/v1/experience/**").hasAuthority(ADMIN.name())

                .requestMatchers(GET, "/api/v1/category/**").permitAll()
                .requestMatchers(POST, "/api/v1/category/**").hasAuthority(ADMIN.name())
                .requestMatchers(PUT, "/api/v1/category/**").hasAuthority(ADMIN.name())
                .requestMatchers(DELETE, "/api/v1/category/**").hasAuthority(ADMIN.name())

                .requestMatchers(GET, "/api/v1/user/getById/**").hasAnyAuthority(USER.name(), ADMIN.name())
                .requestMatchers(GET, "/api/v1/user/**").hasAuthority(ADMIN.name())
                .requestMatchers(PUT, "/api/v1/user/**").hasAuthority(ADMIN.name())

                .requestMatchers(GET, "/api/v1/reservation/user**").hasAnyAuthority(USER.name(), ADMIN.name())
                .requestMatchers(GET, "/api/v1/reservation/**").permitAll()
                .requestMatchers(POST, "/api/v1/reservation/**").hasAnyAuthority(USER.name(), ADMIN.name())
                .requestMatchers(PUT, "/api/v1/reservation/**").hasAnyAuthority(USER.name(), ADMIN.name())
                .requestMatchers(DELETE, "/api/v1/reservation/**").hasAnyAuthority(USER.name(), ADMIN.name())

                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout()
                .logoutUrl("/api/v1/auth/logout")
                .addLogoutHandler(logoutHandler)
                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext());
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowedMethods(List.of("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}