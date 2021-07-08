import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: any = {
    1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", actype: "savings", balance: 8000 }

  }
  constructor() { }
  register(acno: any, username: any, password: any, actype: any) {

    let Acdetail = this.users;

    if (acno in Acdetail) {
      return false;
    }
    else {
      Acdetail[acno] = {
        acno,
        username,
        password,
        actype,
        balance: 0
      }
      return true;
    }

  }
  login(acno: any, pwd: any) {

    let accDetails = this.users
    if (acno in accDetails) {
      if (pwd == accDetails[acno]["password"]) {
        return true;

      }
      else {
        alert("password invalid")
        return false;
      }
    }
    else {
      alert("invalid user")
      return false
    }


  }
  deposit(acno: any, pwd: any, amt: any) {
    var amount = parseInt(amt);
    let accDetails = this.users;
    if (acno in accDetails) {
      if (pwd == accDetails[acno]["password"]) {
        accDetails[acno]["balance"] += amount;
        return accDetails[acno]["balance"]

      }
      else {
        alert("password invalid")
        return false;
      }
    }
    else {
      alert("invalid user")
      return false
    }
  }
  withdraw(acno: any, pwd: any, amt: any) {
    var amount = parseInt(amt);
    let accDetails = this.users;
    if (acno in accDetails) {
      if (pwd == accDetails[acno]["password"]) {
        if (accDetails[acno]["balance"] < amount) { alert("Insufficient Funds") } else { accDetails[acno]["balance"] -= amount; return accDetails[acno]["balance"] }

      }
      else {
        alert("password invalid")
        return false;
      }
    }
    else {
      alert("invalid user")
      return false
    }
  }

}
