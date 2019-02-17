import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonformComponent } from './jsonform.component';

const routes: Routes = [
  { path: '', component: JsonformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonformRoutingModule { }
