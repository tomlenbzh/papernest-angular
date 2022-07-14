import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutPageComponent } from './modules/core/pages/main-layout-page/main-layout-page.component';

const children: Routes = [
  {
    path: 'up',
    loadChildren: () => import('./modules/up/up.module').then((m) => m.UpModule)
  },
  {
    path: 'down',
    loadChildren: () => import('./modules/down/down.module').then((m) => m.DownModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./modules/reset/reset.module').then((m) => m.ResetModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'up'
  }
];

const routes: Routes = [
  { path: '', component: MainLayoutPageComponent, children },
  { path: '**', redirectTo: 'up' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
