package com.support_app.service;

import com.support_app.exception.UserNotFoundException;
import com.support_app.mapper.UserAuthMapper;
import com.support_app.model.User;
import com.support_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserAuthMapper userAuthMapper;

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }
}
