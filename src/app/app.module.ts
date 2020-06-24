import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardDirective } from './card.directive';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './Auth/login/login.component';
import {ForseekerService} from './forseeker.service';
import {ForrecruiterService} from './forrecruiter.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { DriverComponent } from './Auth/login/driver/driver.component';
import { DriregisterComponent } from './Auth/regis/driregister/driregister.component';
import { HomeComponent } from './seeker/dashboard/home/home.component';
import { ContactComponent } from './seeker/dashboard/contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ContactinfoComponent } from './admin/contactinfo/contactinfo.component';
import { CustomerReqComponent } from './admin/customer-req/customer-req.component';
import { AllPostedComponent } from './admin/all-posted/all-posted.component';
import { DriversComponent } from './drivers/drivers.component';
import { DriverdashComponent } from './drivers/driverdash/driverdash.component';
import { PaymentComponent } from './drivers/payment/payment.component';
import { PaymentsComponent } from './seeker/dashboard/payments/payments.component';
import { HomepageComponent } from './Auth/homepage/homepage.component';
import { AdminloginComponent } from './Auth/login/adminlogin/adminlogin.component';
import { CompletedComponent } from './admin/completed/completed.component';
import { BlogComponent } from './Auth/homepage/blog/blog.component';
import { CustomerInfoComponent } from './admin/customer-info/customer-info.component';
import { RepairerInfoComponent } from './admin/repairer-info/repairer-info.component';
import { DriverInfoComponent } from './admin/driver-info/driver-info.component';
import { ApplyComponent } from './seeker/dashboard/apply/apply.component';
import { DriappliedComponent } from './drivers/driapplied/driapplied.component';
import { DriCompletedComponent } from './seeker/dashboard/dri-completed/dri-completed.component';
import { CompleteddriComponent } from './drivers/completeddri/completeddri.component';

//import { SearchComponent } from './seeker/search/search.component';
//import { EditprofileComponent } from './seeker/editprofile/editprofile.component';
//import { PostjobComponent } from './recruiter/rdashboard/postjob/postjob.component';
//import { RdashboardComponent } from './recruiter/rdashboard/rdashboard.component';
//import { RprofileComponent } from './recruiter/rprofile/rprofile.component';
//import { PostedjobsComponent } from './recruiter/rdashboard/postedjobs/postedjobs.component';
//import { AppliedEmployeesComponent } from './recruiter/rdashboard/applied-employees/applied-employees.component';
//import { EmpProfileComponent } from './seeker/emp-profile/emp-profile.component';
//import { RegisComponent } from './Auth/regis/regis.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { LoginComponent } from './login/login.component';
// import { JobsComponent } from './dashboard/jobs/jobs.component';
// import { AppliedjobsComponent } from './dashboard/appliedjobs/appliedjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardDirective,
    routingComponents,
    LoginComponent,
    DriverComponent,
    DriregisterComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    ContactinfoComponent,
    CustomerReqComponent,
    AllPostedComponent,
    DriversComponent,
    DriverdashComponent,
    PaymentComponent,
    PaymentsComponent,
    HomepageComponent,
    AdminloginComponent,
    CompletedComponent,
    BlogComponent,
    CustomerInfoComponent,
    RepairerInfoComponent,
    DriverInfoComponent,
    ApplyComponent,
    DriappliedComponent,
    DriCompletedComponent,
    CompleteddriComponent,
    
 
    
   
   // SearchComponent,
    //EditprofileComponent,
    //PostjobComponent,
    // RdashboardComponent,
    // RprofileComponent,
    // PostedjobsComponent,
    // AppliedEmployeesComponent,
    //EmpProfileComponent,
    //RegisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ForseekerService,ForrecruiterService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
