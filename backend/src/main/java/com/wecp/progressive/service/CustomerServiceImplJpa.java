package com.wecp.progressive.service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import com.wecp.progressive.entity.Customers;
@Service
public class CustomerServiceImplJpa implements CustomerService{

    private List<Customers> listCustomer = new ArrayList<>();
    @Override
    public List<Customers> getAllCustomers() throws SQLException {
        return null;
        
    }

    @Override
    public Customers getCustomerById(int customerId) throws SQLException {
        return null;
       
    }

    @Override
    public int addCustomer(Customers customers) throws SQLException {
        // TODO Auto-generated method stub
        return -1;
    }

    @Override
    public void updateCustomer(Customers customers) throws SQLException {
        // TODO Auto-generated method stub
       
    }

    @Override
    public void deleteCustomer(int customerId) throws SQLException {
        // TODO Auto-generated method stub
       
    }

    @Override
    public List<Customers> getAllCustomersSortedByName() throws SQLException {
        // TODO Auto-generated method stub
       return null;
    }

    @Override
    public List<Customers> getAllCustomersFromArrayList() {
        // TODO Auto-generated method stub
        return listCustomer;
    }

    @Override
    public List<Customers> addCustomersToArrayList(Customers customers) {
        // TODO Auto-generated method stub
        listCustomer.add(customers);
        return listCustomer;
    }

    @Override
    public List<Customers> getAllCustomersSortedByNameFromArrayList() {
        // TODO Auto-generated method stub
       List<Customers> sortedList = listCustomer;
       Collections.sort(sortedList);
       return sortedList;
    }

    @Override
    public void emptyArrayList() {
        // TODO Auto-generated method stub
        listCustomer = new ArrayList<>();
    }
    
}