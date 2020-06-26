import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ForseekerService {

  constructor(private httpCli:HttpClient) { }
  
  login(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/public/employee/login',body
    ,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
  adminlogin(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/admin/login',body
    ,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }

  driverlogin(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/driver/login',body
    ,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
  contact(body:any){
    console.log("DATA :"+JSON.stringify(body));
    return this.httpCli.post('https://fixie-server.herokuapp.com/contact/create',body
    ,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
  employee_register(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/public/addemployee',body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
  driver_register(body:any){
    return this.httpCli.post('https://fixie-server.herokuapp.com/driver/adddriver',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
  }
  getcontact()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
   
    return this.httpCli.get(`https://fixie-server.herokuapp.com/contact/getcontact`,httpOptions);
  }
  getalljobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
   
    return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getalljobs`,httpOptions);
  }
  getcustomer()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
   
    return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getcustomer`,httpOptions);
  }
  
  deletecontact(_id:string)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    console.log(httpOptions);
    
    return this.httpCli.delete(`https://fixie-server.herokuapp.com/contact/${_id}`,httpOptions);
  }

  deletejob(get:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    console.log(httpOptions);
    
    return this.httpCli.delete(`https://fixie-server.herokuapp.com/jobs/${get._id}`,httpOptions);
  }

  deletecustomer(get:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    console.log(httpOptions);
    
    return this.httpCli.delete(`https://fixie-server.herokuapp.com/jobs/customer/${get._id}`,httpOptions);
  }
  getjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    console.log(httpOptions);
    return this.httpCli.get(`https://fixie-server.herokuapp.com/private/employees/getjobs/${this.getpayload().id}`,httpOptions);
  }
  searchbycompany(companyname)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/private/employees/companyname/${companyname}`,httpOptions);
  }
  searchbyrole(jobrole:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/private/employees/jobrole/${jobrole}`,httpOptions);
  }
  searchlatestjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/private/employees/latest`,httpOptions);
  }
   applyjob(jobs:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer'+' '+this.gettoken()
      })
    };
    let job_id:any=jobs.jobDetails._id;
    let emp_id:any=this.getpayload().id;
    return this.httpCli.get(`https://fixie-server.herokuapp.com/private/employees/apply/${emp_id}/${job_id}`,httpOptions);
  }
  applyjobs(jobs:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer'+' '+this.gettoken()
      })
    };
    let job_id:any=jobs.jobDetails._id;
    let emp_id:any=this.getpayload().id;
    return this.httpCli.get(`https://fixie-server.herokuapp.com/private/admin/apply/${emp_id}/${job_id}`,httpOptions);
  }
  getappliedjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/private/employees/appliedlist/${this.getpayload().username}`,httpOptions);
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
  alllatestjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/alllatestjobs`,httpOptions);
  }
  getapply()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getapply`,httpOptions);
  }

  completed()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/completed`,httpOptions);
  }

 
  
  uploadprofilepic(fd:any)
  {
    return this.httpCli.post(`https://fixie-server.herokuapp.com/private/employee/uploadpicture/${this.getpayload().id}`,fd);
   
  }
gettoken()
{
  return localStorage.getItem('token');
}
getpayload()
{
  let token=this.gettoken();
  return JSON.parse(window.atob(token.split('.')[1])); 
}
Empupdateprofile(body:any)
{
  return this.httpCli.put('https://fixie-server.herokuapp.com/private/employees/editprofile',body,
  {
    
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    
  });
}
getprofile()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer${this.gettoken()}`
    })
  };
  return this.httpCli.get(`https://fixie-server.herokuapp.com/private/employees/profile/${this.getpayload().id}`,httpOptions);
}
updaterepairer(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updaterepairer',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
donejob(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/donejob',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
repairerdone(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/repairerdone',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}

updatedriapply(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatedriapply',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}

updateuser(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updateuser',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updatealluser(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatealluser',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updatephone(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatephone',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updatedriname(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatedriname',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}

updatedriver(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/driver/updatedriver',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updaterepusername(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updaterepusername',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}

updatepayment(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/driver/updatepayment',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updatedri(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/driver/updatedri',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updatedelpayment(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatedelpayment',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}

updatedrivers(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatedrivers',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}

updatedriverspayment(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatedriverspayment',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updaterep(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/driver/updaterep',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updaterepairers(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updaterepairers',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updaterepacc(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updaterepacc',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}

updatedripayment(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updatedripayment',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}
updaterepaddress(body:any){
  return this.httpCli.post('https://fixie-server.herokuapp.com/jobs/updaterepaddress',body,
  {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  }
  ); 
}


getRepairerJobs()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getRepairer`,httpOptions);
}

getrepJobs()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getrepJobs`,httpOptions);
}

getcustomeradd()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getcustomeradd`,httpOptions);
}

getcustomername()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getcustomername`,httpOptions);
}

getpaymentJobs()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.get(`https://fixie-server.herokuapp.com/jobs/getpaymentJobs`,httpOptions);
}


getdriverJobs()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.get(`https://fixie-server.herokuapp.com/driver/getdriver`,httpOptions);
}

getdriversJobs()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.get(`https://fixie-server.herokuapp.com/driver/getdriver`,httpOptions);
}

getpayments()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.get(`https://fixie-server.herokuapp.com/driver/getpayment`,httpOptions);
}



logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('currentemployee');
  localStorage.removeItem('currentemployeeid')
}
}
