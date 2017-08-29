import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { ServiceComponent } from './service/service.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ResidentialComponent } from './residential/residential.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  { 
    path: 'welcome', component: LandingpageComponent
  },
  {
    // path: '',
    // children: []
    path: 'service', component: ServiceComponent
  },
  {
    path: 'maintenance', component: MaintenanceComponent
  },
  {
    path: 'residential', component: ResidentialComponent
  },
  {
    path: 'management', component: ManagementComponent
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'welcome', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  LandingpageComponent,
  ServiceComponent,
  MaintenanceComponent,
  ResidentialComponent,
  ManagementComponent
];
