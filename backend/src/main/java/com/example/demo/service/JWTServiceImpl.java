package com.example.demo.service;

import com.example.demo.config.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;

public class JWTServiceImpl implements JWTService{

   private final JwtUtil jwtUtil;


   @Autowired
    public JWTServiceImpl(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    public String generateToken(String username) {
        return jwtUtil.generateToken(username);
    }

    @Override
    public boolean validateToken(String token, String username) {
        return username.equals(jwtUtil.extractUsername(token));

    }
}
