import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MaterialModule,
    AmplifyAngularModule
  ],
  providers: [AmplifyService]
})
export class WelcomePageModule { }
