import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FordrverService {

  constructor(private httpCli:HttpClient) { }
  login(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/public/driver/login',body
    ,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
  recruiter_register(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/public/adddrivers',body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
  getdriver()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
   
    return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getdriver`,httpOptions);
  }
  

  getpostedjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/private/recruiters/jobs/${this.getpayload().id}`,httpOptions);
  }
  postedjob(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/postedjob',body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    ); 
  }
  updatedri(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatedri',body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    ); 
  }
  deletedriver(get:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    console.log(httpOptions);
    
    return this.httpCli.delete(`https://fixie-server.herokuapp.com/jobs/driver/${get._id}`,httpOptions);
  }

  
  updaterecdri(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updaterecdri',body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    ); 
  }
  updatecompanyname(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatecompanyname',body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    ); 
  }

  updatecustomer(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatecustomer',body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    ); 
  }
  
  getseekers()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/private/recruiters/seekers/${this.getpayload().id}`,httpOptions);
  }
  applydrijobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/applydrijobs`,httpOptions);
  }
  address(body:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/address/${this.getpayload().id}`,httpOptions);
  }
  
  getaddress()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getaddress/id`,httpOptions);
  }
  
gettoken()
{
  return localStorage.getItem('token');
}
postjob(body:any)
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.post('https://fixie-server.herokuapp.com/private/recruiters/addjob',body,httpOptions);
}
getpayload()
{
  let token=this.gettoken();
  return JSON.parse(window.atob(token.split('.')[1])); 
}

logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('currentrecruiter');
  
}
}


