import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { BuildsComponent } from './builds/builds.component';
import { SharedModule } from '../shared/shared.module';
import { DeviceComponent } from './device/device.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [BuildsComponent, DeviceComponent],
  imports: [
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSortModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    TranslateModule
  ],
  exports: [BuildsComponent]
})
export class PagesModule {}
