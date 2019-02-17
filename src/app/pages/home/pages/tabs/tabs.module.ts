import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { MaterialModule } from 'src/app/modules/material.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    MaterialModule
  ]
})
export class TabsPageModule { }
