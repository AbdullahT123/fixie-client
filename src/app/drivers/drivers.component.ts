import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ForrecruiterService} from '../forrecruiter.service';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor(private router:Router,private activeroute:ActivatedRoute,private recservice:ForrecruiterService) { }
  companyName:any;
  ngOnInit(): void {
    this.companyName=this.recservice.getpayload().companyName;
  }
  logoutRecruiter()
  {
    this.recservice.logout();
    this.router.navigate(['login/dri_login'],)
  }

}
