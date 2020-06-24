import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {ForseekerService} from '../../forseeker.service';

@Component({
  selector: 'app-customer-req',
  templateUrl: './customer-req.component.html',
  styleUrls: ['./customer-req.component.css']
})
export class CustomerReqComponent implements OnInit {
  alljobs:any=[];
waitforjobs:any;
isvalid :any;
appliedmessage:any;
alreadyapplied:any;
errormessage:any;
location:any;
totaljobs:any;
  successmsg:boolean=false;
  headers=['Device Name','Budget','Payment','Customer','cus_number','Repairer','rep_number','Dri_name','Dri_phone','PostedDate','Repairer Status','Driver Status',''];

  constructor(private router:Router,private fb:FormBuilder,private fservice:ForseekerService) { }
  contactget = <any >{};
  ngOnInit(): void {
    this.location=localStorage.getItem('location');
    this.fservice.getalljobs().subscribe(
      (res:any)=>{
        this.alljobs=res.data;
        this.successmsg=true;
        console.log(res);
      },(error)=>{
        console.log("Internal Server Error");
      }
    );
    
    
    

  }
  
 
  apply( jobapply:any)
  {
    var obj = {
      _id :jobapply._id,
      repairer : "true" 
    }
    window.alert("Accepted");
    console.log(obj);
    this.fservice.updaterepairer(obj).subscribe(
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
  deletejob(jobapply:any){
    var get = {
      _id :jobapply._id
    }
    window.alert("Deleted");
    this.fservice.deletejob(get).subscribe(
      res =>{
        this.contactget= res;
        console.log(res);
        location.reload();
      },
      error =>{
        console.log("erroe");
      
      }
    )
  }
 
}
