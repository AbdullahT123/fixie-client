import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{ForrecruiterService} from '../../forrecruiter.service';

@Component({
  selector: 'app-all-posted',
  templateUrl: './all-posted.component.html',
  styleUrls: ['./all-posted.component.css']
})
export class AllPostedComponent implements OnInit {
  posted:any =[];
  nojobs:any;
  totaljobs:any;
  errormsg:any;
  successmsg:boolean=false;
  headers=['Device','Budget','Email','Payment','Experience',''];

  constructor(private router:Router,private activeroute:ActivatedRoute,private recservice:ForrecruiterService) { }

  ngOnInit(): void {
    this.postedjobs();
  }
  postedjobs()
  {
    this.recservice.getpostedjobs().subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
        console.log(response);
        this.posted=response.data;
        this.totaljobs=response.data.length;
        this.successmsg=true;
        }
        
      else{
        console.log(response);
        this.nojobs=response.message;
        console.log(response.length);
        
        //console.log(this.applied);
      }
    },(error)=>{
      this.errormsg=error;
    }
    )
  }
}
