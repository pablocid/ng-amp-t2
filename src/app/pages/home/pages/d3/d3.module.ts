import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3RoutingModule } from './d3-routing.module';
import { D3Component } from './d3.component';

@NgModule({
  declarations: [D3Component],
  imports: [
    CommonModule,
    D3RoutingModule
  ]
})
export class D3PageModule { }
