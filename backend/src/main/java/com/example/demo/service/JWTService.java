package com.example.demo.service;

public interface JWTService {
    String generateToken(String username);
    boolean validateToken(String token, String username);

}
