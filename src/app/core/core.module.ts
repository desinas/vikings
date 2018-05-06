import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { ToastService } from './toast.service';
import { throwIfAlreadyLoaded } from './module-import-check';
import { NgMaterialModule } from '../ng-material/ng-material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgMaterialModule,
    RouterModule // because we use <router-outlet> and routerLink
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}