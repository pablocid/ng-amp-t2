import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { MaterialModule } from 'src/app/modules/material.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    MaterialModule
  ]
})
export class CardPageModule { }
