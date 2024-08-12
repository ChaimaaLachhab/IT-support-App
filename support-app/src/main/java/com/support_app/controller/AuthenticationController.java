package com.support_app.controller;

import com.support_app.dto.LoginUserDto;
import com.support_app.dto.RegisterUserDto;
import com.support_app.model.LoginResponse;
import com.support_app.model.User;
import com.support_app.service.AuthenticationService;
import com.support_app.service.JwtService;
import com.support_app.exception.UserAlreadyExistsException;
import com.support_app.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final JwtService jwtService;
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    /**
     * Registers a user of a specified type (regular, technician, admin).
     * @param userType The type of user to be registered.
     * @param registerUserDto The registration information.
     * @return The registered user or an error message if the user already exists.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/register/{userType}")
    public ResponseEntity<?> registerUser(
            @PathVariable("userType") String userType,
            @RequestBody RegisterUserDto registerUserDto) {

        try {
            User registeredUser = authenticationService.signup(registerUserDto, userType);
            return ResponseEntity.ok(registeredUser);
        } catch (UserAlreadyExistsException ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
        }
    }

    /**
     * Authenticates a user.
     * @param loginUserDto The login information.
     * @return The login response containing the JWT token or an error message if authentication fails.
     */
    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody LoginUserDto loginUserDto) {
        try {
            User authenticatedUser = authenticationService.authenticate(loginUserDto);
            String role = authenticatedUser.getAuthorities().stream()
                    .map(authority -> authority.getAuthority().replace("ROLE_", ""))
                    .findFirst()
                    .orElse(null);

            String jwtToken = jwtService.generateToken(authenticatedUser, role);

            LoginResponse loginResponse = new LoginResponse();
            loginResponse.setToken(jwtToken);
            loginResponse.setExpiresIn(jwtService.getExpirationTime());

            return ResponseEntity.ok(loginResponse);
        } catch (UserNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login.");
        }
    }
}
