package com.ishwar.product_management_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.ishwar.product_management_backend.model.User;

@Repository
@EnableJpaRepositories
// @Repository:The @Repository 
// annotation in Spring is used to indicate that 
// a class provides the mechanism for storage, retrieval, 
// search, update and delete operation on objects.
//  It is commonly used to annotate DAO (Data Access Object) classes.

public interface UserRepository extends JpaRepository<User, Long> {
   
    // we need method to find by a user name
    User findByUsername(String username);
}
