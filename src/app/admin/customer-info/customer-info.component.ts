import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {ForseekerService} from '../../forseeker.service';
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  alljobs:any=[];
  waitforjobs:any;
  isvalid :any;
  appliedmessage:any;
  alreadyapplied:any;
  errormessage:any;
  location:any;
  totaljobs:any;
    successmsg:boolean=false;
    contactget = <any >{};
    headers=['Customer Name','Email','Location',' Exp','About','',''];
  constructor(private router:Router,private fb:FormBuilder,private fservice:ForseekerService) { }

  ngOnInit(): void {
    this.fservice.getcustomer().subscribe(
      (res:any)=>{
        this.alljobs=res.data;
        this.successmsg=true;
        console.log(res);
      },(error)=>{
        console.log("Internal Server Error");
      }
    );
  }

  deletecustomer(jobapply:any){
    var get = {
      _id :jobapply._id
    }
    window.alert("Deleted");
    this.fservice.deletecustomer(get).subscribe(
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
