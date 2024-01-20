package com.ishwar.product_management_backend.service;

import com.ishwar.product_management_backend.model.User;

public interface UserService {
    User findByUsername(String username);
    User save(User user);
}

