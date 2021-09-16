import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModuleComponent } from './home-module.component';

const routes: Routes = [{ path: '', component: HomeModuleComponent ,
  children:[
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'shared-hosting', loadChildren: () => import('./shared-hosting/shared-hosting.module').then(m => m.SharedHostingModule) },
    { path: 'dedicated', loadChildren: () => import('./dedicated/dedicated.module').then(m => m.DedicatedModule) },
    { path: 'domains', loadChildren: () => import('./domains/domains.module').then(m => m.DomainsModule) },
    { path: 'knowledgebase-list', loadChildren: () => import('./knowledgebase-list/knowledgebase-list.module').then(m => m.KnowledgebaseListModule) },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
    { path: 'blog-details', loadChildren: () => import('./blog-details/blog-details.module').then(m => m.BlogDetailsModule) },
    { path: 'legal', loadChildren: () => import('./legal/legal.module').then(m => m.LegalModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
