import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgebaseListComponent } from './knowledgebase-list.component';

const routes: Routes = [{ path: '', component: KnowledgebaseListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgebaseListRoutingModule { }
