import { Component, OnInit } from '@angular/core';
import{ForseekerService} from '../../forseeker.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  data : any = {};
  jobs:any=[];
  waitforjobs:any;
  appliedmessage:any;
  alreadyapplied:any;
  errormessage:any;
  totaljobs:any;
  headers=['Device Name','Email','Description','Phone No','Budget','Posted date',''];
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
}
