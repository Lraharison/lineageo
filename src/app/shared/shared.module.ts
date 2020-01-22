import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineageosService } from './services/lineageos.service';
import { SizePipe } from './pipes/size.pipe';

@NgModule({
  declarations: [SizePipe],
  imports: [
    CommonModule
  ],
  providers: [LineageosService],
  exports: [SizePipe]
})
export class SharedModule { }
