import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './shared/components/device/device.component';
import { PageBuildsComponent } from "./pages/page-builds/page-builds.component";

const routes: Routes = [
  { path: '', component: PageBuildsComponent },
  { path: ':device', component: DeviceComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
