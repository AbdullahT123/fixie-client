import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {ForrecruiterService} from '../../../forrecruiter.service';

@Component({
  selector: 'app-dri-completed',
  templateUrl: './dri-completed.component.html',
  styleUrls: ['./dri-completed.component.css']
})
export class DriCompletedComponent implements OnInit {
  buttonDisabled:boolean = true;
  getData : any = {};
  jobs:any=[];
  alljobs:any=[];
  waitforjobs:any;
  appliedmessage:any;
  alreadyapplied:any;
  errormessage:any;
  username:any;
  repairaccept:any;
  Id:any;
  contactget:any;
  totaljobs:any;
  replocation:any;
  
  headers=['Device Name','Phone No','payment','Budget','jobDescription','',''];

  constructor(private router:Router,private fb:FormBuilder,private seekerservice:ForrecruiterService) { }

  ngOnInit(): void {
   
    this.seekerservice.completed().subscribe(
      (res:any)=>{
        this.alljobs=res.data;
        console.log(res);
      },(error)=>{
        console.log("Internal Server Error");
      }
    );
  }
  }


