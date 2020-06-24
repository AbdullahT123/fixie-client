import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ForseekerService} from '../forseeker.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private activeroute:ActivatedRoute,private seekerservie:ForseekerService) { }
  username:any;
  ngOnInit(): void {
    this.username=localStorage.getItem('currentemployee');
  }
  logoutemployee()
  {
    this.seekerservie.logout();
    this.router.navigate(['admin'],)
  }
  jobs()
  {
    this.router.navigate(['jobs'],{relativeTo:this.activeroute});
  }
  appliedjobs()
  {
    this.router.navigate(['appliedjobs'],{relativeTo:this.activeroute});
  }
  gotoprofilepage()
  {
    this.router.navigate(['seeker/eprofile']);
  }

}
