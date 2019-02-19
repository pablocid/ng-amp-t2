import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
      { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
      { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
      { path: 'steppers', loadChildren: './pages/steppers/steppers.module#SteppersPageModule' },
      { path: 'forms', loadChildren: './pages/forms/forms.module#FormsPageModule' },
      { path: 'jsonform', loadChildren: './pages/jsonform/jsonform.module#JsonformPageModule' },
      { path: 'cidforms', loadChildren: './pages/cidforms/cidforms.module#CidformsPageModule' },
      { path: 'd3', loadChildren: './pages/d3/d3.module#D3PageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
