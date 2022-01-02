import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { BatchjobsettingsCreateComponent } from './batchjobsettings/batchjobsettings-create/batchjobsettings-create.component';
import { BatchjobsettingsEditComponent } from './batchjobsettings/batchjobsettings-edit/batchjobsettings-edit.component';
import { BatchjobsettingsSearchComponent } from './batchjobsettings/batchjobsettings-search/batchjobsettings-search.component';
import { ReadmailsListComponent } from './mailbox/readmails-list/readmails-list.component';
import { PageNotFoundComponent } from './miscellaneous/page-not-found/page-not-found.component';
import { GeneraterReportsComponent } from './reports/generater-reports/generater-reports.component';
import { StatusmainCreateComponent } from './statusmain/statusmain-create/statusmain-create.component';
import { StatusmainEditComponent } from './statusmain/statusmain-edit/statusmain-edit.component';
import { StatusmainSearchComponent } from './statusmain/statusmain-search/statusmain-search.component';
import { TechCreateComponent } from './technology/tech-create/tech-create.component';
import { TechDashboardComponent } from './technology/tech-dashboard/tech-dashboard.component';
import { TechEditComponent } from './technology/tech-edit/tech-edit.component';
import { TechSearchComponent } from './technology/tech-search/tech-search.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'technology/tech-create',component:TechCreateComponent},
  {path:'technology/tech-search',component:TechSearchComponent},
  {path:'technology/tech-dashboard',component:TechDashboardComponent},
  {path:'technology/tech-edit',component:TechEditComponent},
  {path:'batchjobsettings/batchjobsettings-create',component:BatchjobsettingsCreateComponent},
  {path:'batchjobsettings/batchjobsettings-search',component:BatchjobsettingsSearchComponent},
  {path:'batchjobsettings/batchjobsettings-edit',component:BatchjobsettingsEditComponent},
  {path:'statusmain/statusmain-create',component:StatusmainCreateComponent},
  {path:'statusmain/statusmain-search',component:StatusmainSearchComponent},
  {path:'statusmain/statusmain-edit',component:StatusmainEditComponent},
  {path:'mailbox/readmails-list',component:ReadmailsListComponent},
  {path:'reports/generate-reports',component:GeneraterReportsComponent},
  {path:'',redirectTo:'technology/tech-dashboard',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }

