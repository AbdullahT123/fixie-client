import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { FordrverService } from '../../../fordriver.service';
@Component({
  selector: 'app-driregister',
  templateUrl: './driregister.component.html',
  styleUrls: ['./driregister.component.css']
})
export class DriregisterComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private dri_service:FordrverService) { }
  
  RecruiterRegisterForm:FormGroup;
  registrationsuccess:any;
  regisfail:any;
  regisserver:any;

  ngOnInit(): void {
    this.RecruiterRegisterForm=this.fb.group({
      companyName: ['',Validators.required],
      password: ['',Validators.compose([Validators.required,Validators.minLength(8)])],
      companyMail:['',Validators.compose([Validators.required,Validators.email])],
      industryType:['',Validators.required],
      phone: ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(11)])],
      yearsofExp: ['',Validators.required],
      About: ['',Validators.required]
      });
  }
  registerdriver()
  {
    this.dri_service.recruiter_register(JSON.stringify(this.RecruiterRegisterForm.value)).subscribe(
      (response:any)=>{
        if(response.status===1){
          this.registrationsuccess='Congratulations you Successfully Added';
          this.RecruiterRegisterForm.reset();
            setTimeout(() => {
              this.router.navigate(['/login/dri_login']);
            }, 3000);
        }else{
          this.regisfail='You are already a job Giver';
          console.log(this.regisfail);
        }
      },
      (error)=>{
          this.regisserver='Internal server error'; 
      }

    );
  }

}


