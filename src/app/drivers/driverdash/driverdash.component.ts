import { Component, OnInit } from '@angular/core';
import{ForseekerService} from '../../forseeker.service';
import{FordrverService} from '../../fordriver.service';

@Component({
  selector: 'app-driverdash',
  templateUrl: './driverdash.component.html',
  styleUrls: ['./driverdash.component.css']
})
export class DriverdashComponent implements OnInit {
  data : any = [];
  data1 : any = [];
  data2 : any = [];
jobs:any=[];
address:any=[];
waitforjobs:any;
appliedmessage:any;
alreadyapplied:any;
errormessage:any;
totaljobs:any;
companyName:any;
phone:any;
headers=['Device Name','Phone No','payment','Budget','jobDescription','','','Repairer Address','Customer Address' ,''];

  constructor(private seekerservice:ForseekerService , private driservice:ForseekerService ) { }

  ngOnInit(): void {
    this.getjobs();
  }

  getjobs()
  {
    this.companyName=this.driservice.getpayload().companyName;
    this.phone=localStorage.getItem('phone');
    console.log(this.phone);
    console.log(this.companyName);
    
    this.seekerservice.getdriverJobs().subscribe(
      (response:any)=>
    {
      
      if(response && response.length>0)
      {
        this.jobs=response;
        this.totaljobs=response.length;
      } 
      this.data=response.data;
      
      this.data1=response.data1;
      this.data2=response.data2;
      
      console.log(" DATA :" +this.data);
      console.log(JSON.stringify(this.data1))
      console.log(JSON.stringify(this.data2))
    },
    (error)=>{
      console.log(error.msg);
    }
    );
   
    
  }

  apply(jobapply:any)
  {
    var obj = {
      _id :jobapply._id,
      driverapplied : "Accepted",
      
    }
    console.log(obj);
    location.reload();
    this.seekerservice.updatedri(obj).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         this.appliedmessage=response.message;
         setTimeout(()=>{
          this.appliedmessage='';
          this.getjobs();
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
    this.phone=localStorage.getItem('phone');
    var driphone = {
      _id :jobapply._id,
      phone : this.phone,
      
    }
    console.log(obj);
    location.reload();
    this.seekerservice.updatephone(driphone).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         this.appliedmessage=response.message;
         setTimeout(()=>{
          this.appliedmessage='';
          this.getjobs();
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

    this.companyName=this.driservice.getpayload().companyName;
    var driname = {
      _id :jobapply._id,
      driname : this.companyName,
      
    }
    console.log(obj);
    location.reload();
    this.seekerservice.updatedriname(driname).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         this.appliedmessage=response.message;
         setTimeout(()=>{
          this.appliedmessage='';
          this.getjobs();
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

    var driacc = {
      _id :jobapply._id,
      driverappacc : "Accepted",
      
    }
    console.log(driacc);
    location.reload();
    this.seekerservice.updatedriapply(driacc).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         this.appliedmessage=response.message;
         setTimeout(()=>{
          this.appliedmessage='';
          this.getjobs();
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

    var obj1 = {
      _id :jobapply._id,
      driver : "false",
      
    }
    console.log(obj1);
    this.seekerservice.updatedriver(obj1).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         this.appliedmessage=response.message;
         setTimeout(()=>{
          this.appliedmessage='';
          this.getjobs();
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
  
  

}
