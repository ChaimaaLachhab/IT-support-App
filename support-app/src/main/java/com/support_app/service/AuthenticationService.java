package com.support_app.service;

import com.support_app.exception.UserAlreadyExistsException;
import com.support_app.exception.UserNotFoundException;
import com.support_app.dto.LoginUserDto;
import com.support_app.dto.RegisterUserDto;
import com.support_app.mapper.UserAuthMapper;
import com.support_app.model.User;
import com.support_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserAuthMapper userAuthMapper;

    /**
     * Creates a user of the specified type based on the provided information.
     * @param input The registration information of the user.
     * @param userType The string representing the type of user to be created.
     * @return The created user.
     * @throws UserAlreadyExistsException If a user with the same username already exists.
     */
    public User signup(RegisterUserDto input, String userType) {
        if (userRepository.findByUsername(input.getUserName()) != null) {
            throw new UserAlreadyExistsException(input.getUserName());
        }

        User user;

        if (userType.equalsIgnoreCase("technician")) {
            user = userAuthMapper.registerDtoToTechnician(input);
        } else if (userType.equalsIgnoreCase("admin")) {
            user = userAuthMapper.registerDtoToAdmin(input);
        } else {
            user = userAuthMapper.registerDtoToRegularUser(input);
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    /**
     * Authenticates a user based on the provided information.
     * @param input The login information of the user.
     * @return The authenticated user.
     * @throws UserNotFoundException If the user is not found during authentication.
     */
    public User authenticate(LoginUserDto input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getUserName(),
                        input.getPassword()
                )
        );

        return userRepository.findByUsername(input.getUserName());
    }
}
