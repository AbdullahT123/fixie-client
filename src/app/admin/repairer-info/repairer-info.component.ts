import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {ForrecruiterService} from '../../forrecruiter.service';

@Component({
  selector: 'app-repairer-info',
  templateUrl: './repairer-info.component.html',
  styleUrls: ['./repairer-info.component.css']
})
export class RepairerInfoComponent implements OnInit {
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
    headers=['Repairer Name','Email','Phone No',' Address','Experience','',''];
  constructor(private router:Router,private fb:FormBuilder,private fservice:ForrecruiterService) { }

  ngOnInit(): void {

    this.fservice.getrepairer().subscribe(
      (res:any)=>{
        this.alljobs=res.data;
        this.successmsg=true;
        console.log(res);
      },(error)=>{
        console.log("Internal Server Error");
      }
    );
  }

  deleterepaier(jobapply:any){
    var get = {
      _id :jobapply._id
    }
    window.alert("Deleted");
    this.fservice.deleterepaier(get).subscribe(
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
