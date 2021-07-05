import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Aim = "Welcome to Luminar"
  acc = "Account number here"
  accno = ""
  psswd = ""

  constructor(private router : Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  // accChange(event: any) {
  //   this.accno = event.target.value

  //   console.log(this.accno)
  // }
  // pwdchange(event: any) {
  //   this.pwd = event.target.value
  //   console.log(this.pwd)
  // }

  // login(acccno:any,pswd:any) {
  //   var acno = acccno.value
  //   var pwd = pswd.value
  //   let accDetails = this.users
  //   if (acno in accDetails) {
  //     if (pwd == accDetails[acno]["password"]) {
  //       alert("Login Successful")
  //     }
  //     else{
  //       alert("password invalid")
  //     }
  //   }
  //   else {
  //     alert("invalid credentials")
  //   }


  // }
  // login() {
  //   var acno = this.accno
  //   var pwd = this.pwd
  //   let accDetails = this.users
  //   if (acno in accDetails) {
  //     if (pwd == accDetails[acno]["password"]) {
  //       alert("Login Successful")
  //     }
  //     else{
  //       alert("password invalid")
  //     }
  //   }
  //   else {
  //     alert("invalid credentials")
  //   }


  // }
  login() {
    var acno = this.accno
    var pwd = this.psswd
    let accDetails = this.ds.users
    if (acno in accDetails) {
      if (pwd == accDetails[acno]["password"]) {
        alert("Login Successful");
        this.router.navigateByUrl("dashboard")

      }
      else {
        alert("password invalid")
      }
    }
    else {
      alert("invalid credentials")
    }


  }

}
