import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acctype=""
  accno=""
  uname=""
  pwd=""

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var acno = this.accno;
    var uname = this.uname;
    var pwd = this.pwd;
    var actype = this.acctype

    var result = this.ds.register(acno,uname,pwd,actype)
    if(result){
      alert("success")
      this.router.navigateByUrl("")
    }
    else{
      alert("User already exist plaease login")
      this.router.navigateByUrl("")
    }
  }
}
