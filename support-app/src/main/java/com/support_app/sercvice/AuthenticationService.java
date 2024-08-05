package com.support_app.service;

import com.support_app.dto.LoginUserDto;
import com.support_app.dto.RegisterUserDto;
import com.support_app.model.User;
import com.support_app.model.Utilisateur;
import com.support_app.model.AdministrateurIT;
import com.support_app.model.TechnicienIT;
import com.support_app.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
            UserRepository userRepository,
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Crée un nouvel utilisateur en fonction des informations fournies.
     * @param input Les informations d'inscription de l'utilisateur.
     * @return L'utilisateur créé.
     */
    public User signup(RegisterUserDto input) {
        User user = new Utilisateur(); // Default user type
        user.setUsername(input.getUserName());
        user.setEmail(input.getEmail());
        user.setPassword(passwordEncoder.encode(input.getPassword()));
        return userRepository.save(user);
    }

    /**
     * Authentifie un utilisateur en fonction des informations fournies.
     * @param input Les informations de connexion de l'utilisateur.
     * @return L'utilisateur authentifié.
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

    /**
     * Ajoute un technicien en fonction des informations fournies par un administrateur.
     * @param input Les informations de l'utilisateur à ajouter.
     * @return Le technicien ajouté.
     */
    public User addTechnician(RegisterUserDto input) {
        User user = new TechnicienIT(); // Create as Technician
        user.setUsername(input.getUserName());
        user.setEmail(input.getEmail());
        user.setPassword(passwordEncoder.encode(input.getPassword()));
        return userRepository.save(user);
    }

    /**
     * Ajoute un administrateur en fonction des informations fournies par un administrateur.
     * @param input Les informations de l'utilisateur à ajouter.
     * @return L'administrateur ajouté.
     */
    public User addAdmin(RegisterUserDto input) {
        User user = new AdministrateurIT(); // Create as Admin
        user.setUsername(input.getUserName());
        user.setEmail(input.getEmail());
        user.setPassword(passwordEncoder.encode(input.getPassword()));
        return userRepository.save(user);
    }
}
