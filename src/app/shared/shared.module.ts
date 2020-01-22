import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineageosService } from './services/lineageos.service';
import { ConverterService } from './services/converter.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LineageosService, ConverterService]
})
export class SharedModule { }
