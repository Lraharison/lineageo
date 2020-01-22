import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() coreModule: CoreModule
  ) {
    if (coreModule) {
      throw new Error('CoreModule has already been loaded. You should only import core modules in AppModule.');
    }
  }
}
