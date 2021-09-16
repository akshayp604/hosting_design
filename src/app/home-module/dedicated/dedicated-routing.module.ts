import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DedicatedComponent } from './dedicated.component';

const routes: Routes = [{ path: '', component: DedicatedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DedicatedRoutingModule { }
