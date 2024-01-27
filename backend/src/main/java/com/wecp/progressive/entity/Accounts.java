package com.wecp.progressive.entity;
import java.util.Comparator;
public class Accounts implements Comparable<Accounts>, Comparator<Accounts>{
    private int account_id;
    private int customer_id;
    private double balance;

    public Accounts() {
    }

    public Accounts(int account_id, int customer_id, double balance) {
        this.account_id = account_id;
        this.customer_id = customer_id;
        this.balance = balance;
    }
    
    public int getAccount_id() {
        return account_id;
    }
    public void setAccount_id(int account_id) {
        this.account_id = account_id;
    }
    public int getCustomer_id() {
        return customer_id;
    }
    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }
    public double getBalance() {
        return balance;
    }
    public void setBalance(double balance) {
        this.balance = balance;
    }
    
    @Override
    public int compare(Accounts acc0, Accounts acc1){
        if(acc0.getBalance() < acc1.balance){
            return -1;
        }else if(acc0.getBalance() > acc1.balance){
            return 1;
        }
        return 0;
    }
    @Override
    public int  compareTo(Accounts acc2){
        if(this.getBalance() < acc2.getBalance()){
            return -1;
        }else if(this.balance > acc2.getBalance()){
            return 1;
        }
        return 0;
    }   
}