import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Aim= "Welcome to Luminar"
  acc = "Account number here"
  accno=""
  pwd=""
  users = {
    1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", actype: "savings", balance: 8000 }

  }
  constructor() { }

  ngOnInit(): void {
  }
accChange(event:any){
  this.accno = event.target.value
  
  console.log(this.accno)
}
pwdchange(event:any){
  this.pwd = event.target.value
  console.log(this.pwd)
}

  login(){
    alert("Login Successful")
  }
}
