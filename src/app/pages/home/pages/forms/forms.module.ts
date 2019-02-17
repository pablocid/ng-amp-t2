import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ShareModule } from 'src/app/modules/share.module';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [FormsComponent, StockBranchComponent, StockProductsComponent, StockSelectorComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialModule,
    ShareModule,
    DynamicFormModule
  ]
})
export class FormsPageModule { }
