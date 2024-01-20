package com.ishwar.product_management_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ishwar.product_management_backend.model.Product;

    public interface ProductRepository extends JpaRepository<Product,Integer>{
        
    }
