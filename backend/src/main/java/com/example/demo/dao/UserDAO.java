package com.example.demo.dao;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDAO  extends JpaRepository<User,Long> {

    Optional<User> findByUsername(String username);
}
