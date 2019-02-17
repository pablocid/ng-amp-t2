import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SteppersComponent } from './steppers.component';

const routes: Routes = [
  { path: '', component: SteppersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SteppersRoutingModule { }
