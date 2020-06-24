import { Component, OnInit } from '@angular/core';
import { ForseekerService } from '../../../forseeker.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private empservice: ForseekerService) { }
  loginUserData=<any>{};
  contactget = <any >{};
  ngOnInit(): void {
    
    
  }

  loginUser()
  {
    this.empservice.contact(this.loginUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    ) 
  }
}
