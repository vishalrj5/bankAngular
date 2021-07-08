import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acctype = ""
  accno = ""
  uname = ""
  pwd = ""

  registerForm = this.fb.group({
    uname: [''],
    accno: ['', Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')],
    acctype: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    pswd: ['']
  })
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {

    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.accno;
    var actype = this.registerForm.value.acctype;
    var pswd = this.registerForm.value.pswd;

    console.log(acno, uname, pswd, actype)
    if (this.registerForm.valid) {
      var result = this.ds.register(acno, uname, pswd, actype)
      if (result) {
        alert("success")
        this.router.navigateByUrl("")
      }
      else {
        alert("User already exist plaease login")
        this.router.navigateByUrl("")
      }
    }
    else {
      alert("Invlaid Form")
    }
  }

}
