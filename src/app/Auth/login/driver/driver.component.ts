import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import {FordrverService} from '../../../fordriver.service';
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  loginsuccess: any;
  loginfail: any;
  constructor(private router: Router, private driservice: FordrverService,private fb:FormBuilder) { }
  loginForm: FormGroup = this.fb.group({
    companyName: [null,Validators.required],
    password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
  });
  ngOnInit(): void {
  }
  moveToRegister() {
    this.router.navigate(['register/dri_register']);
  }
  login() {
    // if (!this.loginForm.valid) {
    //   console.log('Invalid'); return;
    // }
    //console.log(JSON.stringify(this.loginForm.value.username));
    this.driservice.login(JSON.stringify(this.loginForm.value))
      .subscribe(
        (response: any) => {
          if (response.status && response.status === 1) {
            this.loginsuccess = "Login Success-Going to Dashboard";
            localStorage.setItem('token',response.data.token);
           let payload=this.driservice.getpayload();
          localStorage.setItem('currentrecruiter',payload.companyName);
          localStorage.setItem('phone',response.data.phone);
            this.loginForm.reset();
            setTimeout(() => {
              
             //localStorage.setItem('currentemployeeid',payload.id);
              this.router.navigate(['drivers/home']);
            }, 3000);
          }
          else {
            this.loginfail = "Invalid Username/Password";
          }
        },
        (error) => { console.log(error); }
      );
  }
  get form(){
    return this.loginForm.controls;
  }
}
