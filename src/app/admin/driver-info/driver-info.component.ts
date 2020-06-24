import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {FordrverService} from '../../fordriver.service';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.css']
})
export class DriverInfoComponent implements OnInit {
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
    headers=['Driver Name','Email','Location',' Exp','About','',''];
  constructor(private router:Router,private fb:FormBuilder,private fservice:FordrverService) { }

  ngOnInit(): void {
    this.fservice.getdriver().subscribe(
      (res:any)=>{
        this.alljobs=res.data;
        this.successmsg=true;
        console.log(res);
      },(error)=>{
        console.log("Internal Server Error");
      }
    );
  }

  
  deletedriver(jobapply:any){
    var get = {
      _id :jobapply._id
    }
    window.alert("Deleted");
    this.fservice.deletedriver(get).subscribe(
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
