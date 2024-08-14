package com.support_app.controller;

import com.support_app.dto.CreateDefectDto;
import com.support_app.dto.UpdateDefectDto;
import com.support_app.model.Defect;
import com.support_app.model.User;
import com.support_app.service.DefectService;
import com.support_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Retrieves all Users from the system.
     *
     * @return A ResponseEntity containing a list of all User entities.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUser();
        return ResponseEntity.ok(users);
    }

    /**
     * Search a User to the system.
     *
     * @param userId the ID of the User already existe.
     * @return A ResponseEntity containing the created User entity.
     */
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/item/{userId}")
    public ResponseEntity<User> addDefect( @PathVariable Long userId) {
        User user = userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

}
