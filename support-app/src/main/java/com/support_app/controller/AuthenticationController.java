package com.support_app.controller;

import com.support_app.dto.LoginUserDto;
import com.support_app.dto.RegisterUserDto;
import com.support_app.model.LoginResponse;
import com.support_app.model.User;
import com.support_app.sercvice.JwtService;
import com.support_app.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/auth")
@RestController
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationService authenticationService;

    /**
     * Inscription autonome pour les utilisateurs normaux.
     * @param registerUserDto Les informations d'inscription.
     * @return L'utilisateur enregistré.
     */
    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signup(registerUserDto);
        return ResponseEntity.ok(registeredUser);
    }

    /**
     * Connexion d'un utilisateur.
     * @param loginUserDto Les informations de connexion.
     * @return La réponse de connexion contenant le token JWT.
     */
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }

    /**
     * Ajout d'un technicien par un administrateur supérieur.
     * @param registerUserDto Les informations de l'utilisateur à ajouter.
     * @return Le technicien ajouté.
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/admin/add-technician")
    public ResponseEntity<User> addTechnician(@RequestBody RegisterUserDto registerUserDto) {
        User newTechnician = authenticationService.addTechnician(registerUserDto);
        return ResponseEntity.ok(newTechnician);
    }

    /**
     * Ajout d'un administrateur par un administrateur supérieur.
     * @param registerUserDto Les informations de l'utilisateur à ajouter.
     * @return L'administrateur ajouté.
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/admin/add-admin")
    public ResponseEntity<User> addAdmin(@RequestBody RegisterUserDto registerUserDto) {
        User newAdmin = authenticationService.addAdmin(registerUserDto);
        return ResponseEntity.ok(newAdmin);
    }

}
