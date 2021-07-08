import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accno="";
  pswd="";
  amt="";

  
  accno1="";
  pswd1="";
  amt1="";

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    var acno = this.accno;
    var pwd = this.pswd;
    var amt = this.amt;
    var result = this.ds.deposit(acno,pwd,amt)
    if(result){
      alert(amt+"Sucesfully deposited. Balance is"+result)
    }
  }
  withdraw(){
    var accno1 = this.accno1;
    var pswd1 = this.pswd1;
    var amt1 = this.amt1;
    var result = this.ds.withdraw(accno1,pswd1,amt1)
    if (result){
      alert("Withdrawed"+amt1+"New balance is"+result)
    }
    
  }

}
