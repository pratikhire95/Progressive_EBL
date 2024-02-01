package com.wecp.progressive.repository;

import java.sql.SQLException;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wecp.progressive.entity.Accounts;
@Repository
public interface AccountRepository extends JpaRepository<Accounts, Integer> {
    List<Accounts> getAccountsByCustomerId(int customerId);
    Accounts findByAccountId(int accountId);
    List<Accounts> findByOrderByBalance();
}
