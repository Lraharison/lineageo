import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildsComponent } from './builds/builds.component';
import { DeviceComponent } from './device/device.component';


const routes: Routes = [
  { path: '', component: BuildsComponent },
  { path: ':device', component: DeviceComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
