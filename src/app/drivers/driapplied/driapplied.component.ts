import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {ForseekerService} from '../../forseeker.service';
@Component({
  selector: 'app-driapplied',
  templateUrl: './driapplied.component.html',
  styleUrls: ['./driapplied.component.css']
})
export class DriappliedComponent implements OnInit {
  buttonDisabled:boolean = true;
  getData : any = {};
  jobs:any=[];
  alljobs:any=[];
  waitforjobs:any;
  appliedmessage:any;
  alreadyapplied:any;
  errormessage:any;
  username:any;
  Id:any;
  totaljobs:any;
  replocation:any;
  
  headers=['Device Name','Phone No','payment','Budget','jobDescription',''];
  constructor(private router:Router,private fb:FormBuilder,private seekerservice:ForseekerService) { }

  ngOnInit(): void {
    this.seekerservice.applydrijobs().subscribe(
      (res:any)=>{
        this.alljobs=res.data;
        console.log(res);
      },(error)=>{
        console.log("Internal Server Error");
      }
    );
  }

}
