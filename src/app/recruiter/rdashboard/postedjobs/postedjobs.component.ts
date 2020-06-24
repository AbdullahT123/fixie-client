import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{ForrecruiterService} from '../../../forrecruiter.service';
import{ForseekerService} from '../../../forseeker.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-postedjobs',
  templateUrl: './postedjobs.component.html',
  styleUrls: ['./postedjobs.component.css']
})
export class PostedjobsComponent implements OnInit {
  headers=['Device Name','Budget','Description','Payment','PostedDate',''];
  posted:any =[];
  nojobs:any;
  getData : any = {};
jobs:any=[];
  totaljobs:any;
  errormsg:any;
  successmsg:boolean=false;
  companyId:any;
  
 
  constructor(private router:Router,private activeroute:ActivatedRoute,private recservice:ForrecruiterService ,private seekerservice:ForseekerService) { }

  ngOnInit() {
    this.companyId=this.recservice.getpayload().id;
    this.postedjobs();
  }
  postedjobs()
  {
   var address = {
    companyname: this.companyId
   }
    this.seekerservice.searchbycompany(address).subscribe(
      (response:any)=>
    {
      if(response && response.length>0)
      {
       
        this.jobs=response;
      } 
      this.getData=response.data;
      console.log("This is data"+JSON.stringify(this.getData))
      
      
    },
    (error)=>{
      console.log(error.msg);

    }
    );
    this.recservice.getpostedjobs().subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status && response.status==1){
        
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
    var obj = {
      
      postedjobs : "true" 
    }
    this.recservice.postedjob(obj).subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
          //console.log(response);
         // 
         
         
         
         setTimeout(()=>{
          
          
         },2000) ;
        }else{
          
          setTimeout(()=>{
            
            //this.getjobs();
           },1000);
        }
        
      },(err)=>{
        
      }
    );
  }
}
