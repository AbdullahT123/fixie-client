import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { ForseekerService } from '../../../forseeker.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginsuccess: any;
  loginfail: any;

  
  constructor(private router: Router, private empservice: ForseekerService,private fb:FormBuilder) { }
  loginForm: FormGroup = this.fb.group({
    username: [null,Validators.required],
    password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
  });

  ngOnInit(): void {

  }

  login() {
    // if (!this.loginForm.valid) {
    //   console.log('Invalid'); return;
    // }
    //console.log(JSON.stringify(this.loginForm.value.username));
    this.empservice.adminlogin(JSON.stringify(this.loginForm.value))
      .subscribe(
        (response: any) => {
          console.log("TEST1"+JSON.stringify(response));
          if (response.status == 1) {
            this.loginsuccess = "Login Success-Going to Dashboard";
            localStorage.setItem('token',response.data.token);
           let payload=this.empservice.getpayload();
          localStorage.setItem('currentrecruiter',response.data.username);
            this.loginForm.reset();
            setTimeout(() => {
              
             //localStorage.setItem('currentemployeeid',payload.id);
              this.router.navigate(['admin_login/customer_req']);
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
