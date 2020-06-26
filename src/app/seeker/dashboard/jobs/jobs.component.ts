import { Component, OnInit } from '@angular/core';
import{ForseekerService} from '../../../forseeker.service';
import { ForrecruiterService } from '../../../forrecruiter.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  buttonDisabled:boolean = true;
getData : any = [];
jobs:any=[];
waitforjobs:any;
appliedmessage:any;
alreadyapplied:any;
errormessage:any;
username:any;
user:any;
Id:any;
mobile:any;
totaljobs:any;
replocation:any;

headers=['Device Name','Phone No','payment','Budget','jobDescription',''];

  constructor(private seekerservice:ForseekerService, private recservice: ForrecruiterService) { }
  ngOnInit() {
    this.Id=this.recservice.getpayload().id;
    this.user=this.recservice.getpayload().username;
    this.replocation =localStorage.getItem('emplocation')
    this.mobile =localStorage.getItem('mobile')
    console.log(this.Id);
    console.log(this.user);
    console.log(this.replocation);
    console.log(this.mobile);
  this.getjobs();
  
  }

  getjobs()
  {
    this.seekerservice.getrepJobs().subscribe(
      (response:any)=>
    {
      if(response && response.length>0)
      {
        this.jobs=response;
        this.totaljobs=response.length;
        
      } 
      this.getData=response.data;
      console.log(JSON.stringify(this.getData))
    },
    (error)=>{
      console.log(error.msg);

    }
    );

  }

  
  apply(jobapply:any)
  {
    this.Id=this.recservice.getpayload().id;
    this.user=this.recservice.getpayload().username;
    this.replocation =localStorage.getItem('emplocation')
    this.mobile =localStorage.getItem('mobile')
    var obj321 = {
      _id :jobapply._id,
      user : this.user,
      
    }
    
    this.seekerservice.updateuser(obj321).subscribe(
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

    var num = {
      _id :jobapply._id,
      mobile : this.mobile,
      
    }
    
    this.seekerservice.updatealluser(num).subscribe(
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

    var obj11 = {
      _id :jobapply._id,
      username : this.replocation
    }
    
    this.seekerservice.updaterepusername(obj11).subscribe(
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
    
    var repacc = {
      _id :jobapply._id,
      repairaccept : "true",
    }
    
    this.seekerservice.updaterepacc(repacc).subscribe(
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

    var obj = {
      _id :jobapply._id,
      driver : "true",
    }

    console.log(obj);
    location.reload();
    this.seekerservice.updatedriver(obj).subscribe(
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

    var obj4 = {
      _id :jobapply._id,
      drivers : "true",
      
    }

    console.log(obj4);
    
    this.seekerservice.updatedrivers(obj4).subscribe(
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

    var obj7 = {
      _id :jobapply._id,
      driverpayment : "true",
      
    }

    console.log(obj7);
    
    this.seekerservice.updatedriverspayment(obj7).subscribe(
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
    var obj2 = {
      _id :jobapply._id,
      repairer : "false",
      
    }
    console.log(obj2);
    this.seekerservice.updaterepairers(obj2).subscribe(
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
      repairerapplied : "Accepted",
      
    }
    console.log(obj1);
    this.seekerservice.updaterep(obj1).subscribe(
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
