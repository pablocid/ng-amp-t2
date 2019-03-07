import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonformRoutingModule } from './jsonform-routing.module';
import { JsonformComponent } from './jsonform.component';
import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [JsonformComponent],
  imports: [
    CommonModule,
    JsonformRoutingModule,
    MaterialDesignFrameworkModule,
    NgxJsonViewerModule,
    AceEditorModule
  ]
})
export class JsonformPageModule { }
