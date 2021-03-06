import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedHostingRoutingModule } from './shared-hosting-routing.module';
import { SharedHostingComponent } from './shared-hosting.component';


@NgModule({
  declarations: [
    SharedHostingComponent
  ],
  imports: [
    CommonModule,
    SharedHostingRoutingModule
  ]
})
export class SharedHostingModule { }
