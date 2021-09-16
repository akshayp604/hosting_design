import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgebaseListRoutingModule } from './knowledgebase-list-routing.module';
import { KnowledgebaseListComponent } from './knowledgebase-list.component';


@NgModule({
  declarations: [
    KnowledgebaseListComponent
  ],
  imports: [
    CommonModule,
    KnowledgebaseListRoutingModule
  ]
})
export class KnowledgebaseListModule { }
