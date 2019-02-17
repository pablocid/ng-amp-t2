import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonformRoutingModule } from './jsonform-routing.module';
import { JsonformComponent } from './jsonform.component';
import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';

@NgModule({
  declarations: [JsonformComponent],
  imports: [
    CommonModule,
    JsonformRoutingModule,
    MaterialDesignFrameworkModule
  ]
})
export class JsonformPageModule { }
