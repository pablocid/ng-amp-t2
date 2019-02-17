import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SteppersRoutingModule } from './steppers-routing.module';
import { SteppersComponent } from './steppers.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SteppersComponent],
  imports: [
    CommonModule,
    SteppersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SteppersPageModule { }
