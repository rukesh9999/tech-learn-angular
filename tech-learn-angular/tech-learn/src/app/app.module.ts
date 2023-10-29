import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './miscellaneous/header/header.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { FooterComponent } from './miscellaneous/footer/footer.component';
import { TechCreateComponent } from './technology/tech-create/tech-create.component';
import { TechSearchComponent } from './technology/tech-search/tech-search.component';
import { TechEditComponent } from './technology/tech-edit/tech-edit.component';
import { TechDashboardComponent } from './technology/tech-dashboard/tech-dashboard.component';
import { BatchjobsettingsCreateComponent } from './batchjobsettings/batchjobsettings-create/batchjobsettings-create.component';
import { BatchjobsettingsSearchComponent } from './batchjobsettings/batchjobsettings-search/batchjobsettings-search.component';
import { BatchjobsettingsEditComponent } from './batchjobsettings/batchjobsettings-edit/batchjobsettings-edit.component';
import { ReadmailsListComponent } from './mailbox/readmails-list/readmails-list.component';
import { GeneraterReportsComponent } from './reports/generater-reports/generater-reports.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { StatusmainEditComponent } from './statusmain/statusmain-edit/statusmain-edit.component';
import { StatusmainSearchComponent } from './statusmain/statusmain-search/statusmain-search.component';
import { StatusmainCreateComponent } from './statusmain/statusmain-create/statusmain-create.component';
import { PageNotFoundComponent } from './miscellaneous/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { JwtInterceptor } from './JwtInterceptor';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    TechCreateComponent,
    TechSearchComponent,
    TechEditComponent,
    TechDashboardComponent,
    BatchjobsettingsCreateComponent,
    BatchjobsettingsSearchComponent,
    BatchjobsettingsEditComponent,
    ReadmailsListComponent,
    StatusmainEditComponent,
    StatusmainSearchComponent,
    StatusmainCreateComponent,
    GeneraterReportsComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule, 
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()

    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
