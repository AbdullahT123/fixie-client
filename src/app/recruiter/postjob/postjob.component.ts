import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForrecruiterService } from '../../forrecruiter.service';
import{ForseekerService} from '../../forseeker.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  postjobForm: FormGroup;
  data : any = {};
  postedMsg:any;
  alreadyposted:any;
  errormsg:any;
  getData : any = {};
jobs:any=[];
addressinfo:any=[];
  companyname:any;
  companyId:any;
  location: any;
  
  constructor(private router: Router, private recservice: ForrecruiterService, private fb: FormBuilder,private seekerservice:ForseekerService) { }

  ngOnInit() {
    
    this.companyId=this.recservice.getpayload().id;
    this.companyname=this.recservice.getpayload().companyName;
    this.location=localStorage.getItem('location');
    console.log(this.companyId);
    console.log(this.location);
   
    this.postjobForm = this.fb.group({
      companyId: new FormControl(this.companyId),
      jobRole: ['', Validators.required],
      expRequired: ['', Validators.required],
      skills: ['', Validators.required],
      companyname: new FormControl(this.companyname),
      location : new FormControl(this.location),
      educationalQualifications: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobType: ['', Validators.required]
    })
  }
  logoutRecruiter() {
    this.recservice.logout();
    this.router.navigate(['login/rec_login'])
  }
  
  postajob() {

   

    console.log(this.postjobForm.value);
    this.recservice.getaddress().subscribe(
      (response:any)=>
    {
      if(response && response.length>0)
      {
       
        this.jobs=response;
      } 
      this.getData=response.data;
      console.log("This is data"+JSON.stringify(this.getData))
      
      
    },
    (error)=>{
      console.log(error.msg);

    }
    );
    this.recservice.postjob(JSON.stringify(this.postjobForm.value)).subscribe(
      (response:any)=>{
        
          this.postedMsg=response.message;
          setTimeout(()=>{
            this.postedMsg='';
            this.router.navigate(['rdashboard/postedjobs']);
          },2000);
        
      },(error)=>{
        this.errormsg="Internal Server Error";
      }
    )

    this.companyId=this.recservice.getpayload().id;

    console.log(this.companyId);

    var obj3 = {
      _id : this.companyId,
      companyname : this.companyname
    }

    this.recservice.updatecompanyname(obj3).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         
         setTimeout(()=>{
         
          
         },2000) ;
        }else{
         
          setTimeout(()=>{
            
            //this.getjobs();
           },1000);
        }
        
      },(err)=>{
      
      }
    );
    var obj11 = {
      _id : this.companyId,
      customeraddress : "true" 
    }

    this.recservice.updatecustomer(obj11).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         
         setTimeout(()=>{
         
          
         },2000) ;
        }else{
         
          setTimeout(()=>{
            
            //this.getjobs();
           },1000);
        }
        
      },(err)=>{
      
      }
    );
    var obj = {
      
      driver : "true" 
    }

    this.recservice.updatedri(obj).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         
         setTimeout(()=>{
         
          
         },2000) ;
        }else{
         
          setTimeout(()=>{
            
            //this.getjobs();
           },1000);
        }
        
      },(err)=>{
      
      }
    );

    var obj1 = {
      
      driver : "true" 
    }

    this.recservice.updaterecdri(obj1).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         
         setTimeout(()=>{
         
          
         },2000) ;
        }else{
         
          setTimeout(()=>{
            
            //this.getjobs();
           },1000);
        }
        
      },(err)=>{
      
      }
    );
  }
  

}
