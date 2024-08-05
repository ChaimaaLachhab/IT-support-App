package com.support_app.repository;

import com.support_app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
        User findByUsername(String userName);
        boolean existsByEmail(String email);
}
