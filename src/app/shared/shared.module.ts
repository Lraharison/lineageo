import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineageosService } from './services/lineageos.service';
import { SizePipe } from './pipes/size.pipe';
import { BuildsComponent } from './components/builds/builds.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { DeviceComponent } from './components/device/device.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SizePipe, BuildsComponent, DeviceComponent, StatisticComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSortModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    TranslateModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [LineageosService],
  exports: [SizePipe, BuildsComponent, DeviceComponent, StatisticComponent]
})
export class SharedModule {}
