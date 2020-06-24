import { Component, OnInit } from '@angular/core';
import{ForseekerService} from '../../../forseeker.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  data : any = {};
  jobs:any=[];
  waitforjobs:any;
  appliedmessage:any;
  alreadyapplied:any;
  errormessage:any;
  totaljobs:any;
  headers=['Device Name','Phone No','Budget',''];

  constructor(private seekerservice:ForseekerService) { }

  ngOnInit(): void {
    this.getjobs();
  }
  getjobs()
  {
    this.seekerservice.getpayments().subscribe(
      (response:any)=>
    {
      console.log(response);
      if(response && response.length>0)
      {
        this.jobs=response;
        this.totaljobs=response.length;
      } 
      this.data=response.data;
      console.log(" DATA :" +this.data);
      console.log(JSON.stringify(this.data))
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
      payment : "true" 
    }
    console.log(obj);
    this.seekerservice.updatepayment(obj).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         this.appliedmessage=response.message;
         setTimeout(()=>{
          this.appliedmessage='';
          this.getjobs();
          console.log(this.getjobs);
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
