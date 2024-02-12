<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../types/tstypes/Transaction";
import { Observable } from "rxjs";
import { Customer } from "../types/Customer";
import { Account } from "../types/Account";
// import { transition } from "@angular/animations";

@Injectable({
  providedIn: "root",
})
export class BankService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  addCustomer(customer: Customer): Observable<Customer> {
=======

import { environment } from "src/environments/environment";
import { Transaction } from "../types/Transaction";
import { Observable } from "rxjs";
import { Customer } from "../types/Customer";
import { Account } from "../types/Account";


export class BankService {
  
  

  addCustomer(customer: Customer): Observable<Customer> {
    
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d
  }

  getCustomers(): Observable<Customer[]> {
    

  }

  addAccount(account: Account): Observable<Account> {
<<<<<<< HEAD
   
=======
    
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d
  }

  getAccounts(): Observable<Account[]> {
    

  }

  performTransaction(transaction: Transaction): Observable<Transaction> {
<<<<<<< HEAD
   
=======
    
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d
  }

  getOutstandingBalance(userId: string): Observable<number> {
    
<<<<<<< HEAD
  }

  getAllTranactions(): Observable<Transaction[]> {
    
=======

  }

  getAllTranactions(): Observable<Transaction[]> {
   
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d

  }
  /** get account by user */
  getAccountsByUser(userId:string|null): Observable<Account[]> {
    

  }

  getTransactionByUser(userId: string|null): Observable<Transaction[]> {
    

  }

  deleteCustomer(customerId: number): Observable<any> {
<<<<<<< HEAD
    
  }

  editCustomer(customer: Customer): Observable<Customer> {
   
  }

  deleteAccount(accountId: number): Observable<any> {
    
  }

  editAccount(account: Account): Observable<Account> {
    // return null;
=======
   
  }

  editCustomer(customer: Customer): Observable<Customer> {
    
  }

  deleteAccount(accountId: number): Observable<any> {
   
  }

  editAccount(account: Account): Observable<Account> {
    
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d
  }


}
