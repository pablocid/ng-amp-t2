import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidformsRoutingModule } from './cidforms-routing.module';
import { CidformsComponent } from './cidforms.component';
import { DynamicAttributesFormsModule } from 'src/app/modules/attribute/attribute.module';

@NgModule({
  declarations: [CidformsComponent],
  imports: [
    CommonModule,
    CidformsRoutingModule,
    DynamicAttributesFormsModule
  ]
})
export class CidformsPageModule { }
