import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidformsComponent } from './cidforms.component';

const routes: Routes = [
  { path: '', component: CidformsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidformsRoutingModule { }
