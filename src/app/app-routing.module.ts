import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './seeker/dashboard/dashboard.component';
import {RdashboardComponent} from './recruiter/rdashboard/rdashboard.component';
import {PostedjobsComponent} from './recruiter/rdashboard/postedjobs/postedjobs.component';
import { AppliedEmployeesComponent} from './recruiter/rdashboard/applied-employees/applied-employees.component';
import { JobsComponent } from './seeker/dashboard/jobs/jobs.component';
import { HomeComponent } from './seeker/dashboard/home/home.component';
import { ContactComponent } from './seeker/dashboard/contact/contact.component';
import { AppliedjobsComponent } from './seeker/dashboard/appliedjobs/appliedjobs.component';
import { ApplyComponent } from './seeker/dashboard/apply/apply.component';
import { DriCompletedComponent } from './seeker/dashboard/dri-completed/dri-completed.component';
import {LoginComponent} from './Auth/login/login.component';
import {AdminComponent} from './admin/admin.component';
import {EmpProfileComponent} from './seeker/emp-profile/emp-profile.component';
import {RprofileComponent} from './recruiter/rprofile/rprofile.component';
import { EmploginComponent } from './Auth/login/emplogin/emplogin.component';
import { DriverComponent } from './Auth/login/driver/driver.component';
import { HomepageComponent } from './Auth/homepage/homepage.component';
import { BlogComponent } from './Auth/homepage/blog/blog.component';
import { RecruiterloginComponent } from './Auth/login/recruiterlogin/recruiterlogin.component';
import { AdminloginComponent } from './Auth/login/adminlogin/adminlogin.component';
import { DriversComponent } from './drivers/drivers.component';
import { PaymentComponent } from './drivers/payment/payment.component';
import { DriverdashComponent } from './drivers/driverdash/driverdash.component';
import { DriappliedComponent } from './drivers/driapplied/driapplied.component';
import { CompleteddriComponent } from './drivers/completeddri/completeddri.component';
import { RegisComponent } from './Auth/regis/regis.component';
import { EmpregisterComponent } from './Auth/regis/empregister/empregister.component';
import { DriregisterComponent } from './Auth/regis/driregister/driregister.component';
import {PostjobComponent} from './recruiter/postjob/postjob.component';
import { RecruiterregisterComponent } from './Auth/regis/recruiterregister/recruiterregister.component';
import {EditprofileComponent} from './seeker/editprofile/editprofile.component';
import {SearchComponent} from './seeker/search/search.component';
import {ContactinfoComponent} from './admin/contactinfo/contactinfo.component';
import {CompletedComponent} from './admin/completed/completed.component';
import {CustomerReqComponent} from './admin/customer-req/customer-req.component';
import {CustomerInfoComponent} from './admin/customer-info/customer-info.component';
import {RepairerInfoComponent} from './admin/repairer-info/repairer-info.component';
import {DriverInfoComponent} from './admin/driver-info/driver-info.component';
import {AllPostedComponent} from './admin/all-posted/all-posted.component';
import {PaymentsComponent} from './seeker/dashboard/payments/payments.component';
const routes: Routes = [
  {path:'',redirectTo:'homepage/home',pathMatch:'full'}, 
  //for default pageload..
  //pathmatch can be "prefix" or "full"..
  //when path is empty we use "full",if we want to add to some prefix we then equalise pathMatch="prefix"
  {path:'login',component:LoginComponent,children:[
    {path:'emp_login',component:EmploginComponent},
    {path:'rec_login',component:RecruiterloginComponent},
    {path : 'dri_login' , component:DriverComponent},
    {path : 'admin_login' , component:AdminloginComponent}
      ]},
      {path : 'admin' , component:AdminloginComponent},
  {path : 'admin_login' , component:AdminComponent,children:[
    { path: 'contactinfo', component: ContactinfoComponent },
    { path: 'customer_req', component: CustomerReqComponent },
    {path : 'posted_job' , component:PostedjobsComponent},
    {path : 'completed_job' , component:CompletedComponent},
    {path : 'customer_info' , component:CustomerInfoComponent},
    {path : 'repairer_info' , component:RepairerInfoComponent},
    {path : 'driver_info' , component:DriverInfoComponent},
    
  ]},

  {path : 'homepage' , component:HomepageComponent,children:[
  {path : 'home' , component:HomeComponent},
    {path : 'contact' , component:ContactComponent},
    {path : 'blog' , component:BlogComponent},
    
  ]},
  {path:'register',component:RegisComponent,children:[
    {path:'emp_register',component:EmpregisterComponent},
    {path:'rec_register',component:RecruiterregisterComponent},
    {path:'dri_register', component:DriregisterComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home' ,component:HomeComponent},
    {path:'contact' ,component:ContactComponent},
  {path:'jobs',component:JobsComponent},
  {path:'appliedjobs',component:AppliedjobsComponent}, 
  {path:'payments',component:PaymentsComponent}, 
  {path:'applied_jobs',component:ApplyComponent}, 
  {path:'dri_completed',component:DriCompletedComponent}, 
  ]},

  {path:'drivers',component:DriversComponent,children:[
    {path:'home',component:HomeComponent}, 
    {path:'driverdash',component:DriverdashComponent}, 
    {path:'payment',component:PaymentComponent}, 
    {path:'dri_applied',component:DriappliedComponent}, 
    {path:'dri_completed',component:DriCompletedComponent}, 

  ]},

  {path:'rdashboard',component:RdashboardComponent,children:[
    {path:'postedjobs',component:PostedjobsComponent},
    {path:'applied',component:AppliedEmployeesComponent}, 
    {path:'home',component:HomeComponent},
    
    ]},
  {path:'seeker/eprofile',component:EmpProfileComponent},
  {path:'seeker/editprofile',component:EditprofileComponent},
  {path:'recruiter/rprofile',component:RprofileComponent},
  
  {
    path:'seeker/search',component:SearchComponent
  },
  {
    path:'recruiter/postjob',component:PostjobComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegisComponent,
                                EmpregisterComponent,
                                RecruiterregisterComponent,
                                JobsComponent,
                                AppliedjobsComponent,
                                DashboardComponent,
                                LoginComponent,
                                EmploginComponent,
                                RecruiterloginComponent,
                                EmpProfileComponent,
                                RdashboardComponent,
                                PostedjobsComponent,
                                AppliedEmployeesComponent,
                                RprofileComponent,
                                PostjobComponent,
                                EditprofileComponent,
                                SearchComponent
                              ];
