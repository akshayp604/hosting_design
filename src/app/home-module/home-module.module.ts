import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeModuleComponent } from './home-module.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';


@NgModule({
  declarations: [
    HomeModuleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
