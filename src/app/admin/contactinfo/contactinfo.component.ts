import { Component, OnInit } from '@angular/core';
import { ForseekerService } from '../../forseeker.service';
import {Router} from "@angular/router"



@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {
  headers=['First Name','Last Name','Email','Subject',''];
  contactget = <any >{};

  constructor(private empservice: ForseekerService) { }

  ngOnInit(): void {
    this.empservice.getcontact().subscribe(
      res => {
        this.contactget=res;
        
      } ,
      err => console.log(err)
     
    )
    this.deletecontact(event);
  }
  
  deletecontact(event){
    console.log(event._id);
    this.empservice.deletecontact(event._id).subscribe(
      res =>{
        this.contactget= res;
        location.reload();
      },
      error =>{
        console.log("erroe");
      
      }
    )
  }

}
