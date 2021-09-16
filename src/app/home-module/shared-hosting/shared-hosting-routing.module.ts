import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedHostingComponent } from './shared-hosting.component';

const routes: Routes = [{ path: '', component: SharedHostingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedHostingRoutingModule { }
