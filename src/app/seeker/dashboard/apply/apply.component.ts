import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {ForseekerService} from '../../../forseeker.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  buttonDisabled:boolean = true;
  getData : any = {};
  jobs:any=[];
  alljobs:any=[];
  waitforjobs:any;
  appliedmessage:any;
  alreadyapplied:any;
  errormessage:any;
  username:any;
  repairaccept:any;
  Id:any;
  contactget:any;
  totaljobs:any;
  replocation:any;
  
  headers=['Device Name','Phone No','payment','Budget','jobDescription','',''];
  
  constructor(private router:Router,private fb:FormBuilder,private seekerservice:ForseekerService) { }

  ngOnInit(): void {

    this.seekerservice.getapply().subscribe(
      (res:any)=>{
        this.alljobs=res.data;
        console.log(res);
      },(error)=>{
        console.log("Internal Server Error");
      }
    );
  }

  donejob(jobapply:any){
    var obj = {
      _id :jobapply._id,
      repairaccept : "false"
    }
    window.alert("Done");
    console.log(obj);
    this.seekerservice.donejob(obj).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         this.appliedmessage=response.message;
         
         setTimeout(()=>{
          this.appliedmessage='';
          
         },2000) ;
        }else{
          this.alreadyapplied=response.message; 
          location.reload();
          setTimeout(()=>{
            this.alreadyapplied='';
            //this.getjobs();
           },1000);
        }
        
      },(err)=>{
        this.errormessage=err.message;
      }
    );

    var obj2 = {
      _id :jobapply._id,
      repairerdone : "true"
    }

    this.seekerservice.repairerdone(obj2).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         this.appliedmessage=response.message;
         
         setTimeout(()=>{
          this.appliedmessage='';
          
         },2000) ;
        }else{
          this.alreadyapplied=response.message; 
          location.reload();
          setTimeout(()=>{
            this.alreadyapplied='';
            //this.getjobs();
           },1000);
        }
        
      },(err)=>{
        this.errormessage=err.message;
      }
    );
  }
  }

  

