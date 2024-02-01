package com.wecp.progressive.repository;

import java.sql.SQLException;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wecp.progressive.entity.Customers;
@Repository
public interface CustomerRepository extends JpaRepository<Customers, Integer> {
    Customers findByCustomerId(@Param("customerId") int customerId);

    void deleteByCustomerId(@Param("customerId") int customerId);
    Customers findByName(@Param("customerName") String customerName);
}
