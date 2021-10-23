import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { BatchjobsettingsCreateComponent } from './batchjobsettings/batchjobsettings-create/batchjobsettings-create.component';
import { BatchjobsettingsEditComponent } from './batchjobsettings/batchjobsettings-edit/batchjobsettings-edit.component';
import { BatchjobsettingsSearchComponent } from './batchjobsettings/batchjobsettings-search/batchjobsettings-search.component';
import { ReadmailsListComponent } from './mailbox/readmails-list/readmails-list.component';
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
  {path:'tech-create',component:TechCreateComponent},
  {path:'tech-search',component:TechSearchComponent},
  {path:'tech-dashboard',component:TechDashboardComponent},
  {path:'tech-edit',component:TechEditComponent},
  {path:'batchjobsettings-create',component:BatchjobsettingsCreateComponent},
  {path:'batchjobsettings-search',component:BatchjobsettingsSearchComponent},
  {path:'batchjobsettings-edit',component:BatchjobsettingsEditComponent},
  {path:'statusmain-create',component:StatusmainCreateComponent},
  {path:'statusmain-search',component:StatusmainSearchComponent},
  {path:'statusmain-edit',component:StatusmainEditComponent},
  {path:'readmails-list',component:ReadmailsListComponent},
  {path:'generate-reports',component:GeneraterReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }

