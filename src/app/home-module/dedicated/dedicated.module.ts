import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DedicatedRoutingModule } from './dedicated-routing.module';
import { DedicatedComponent } from './dedicated.component';


@NgModule({
  declarations: [
    DedicatedComponent
  ],
  imports: [
    CommonModule,
    DedicatedRoutingModule
  ]
})
export class DedicatedModule { }
