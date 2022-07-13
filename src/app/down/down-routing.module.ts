import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownPageComponent } from './pages/down-page/down-page.component';

const routes: Routes = [
  { path: '', component: DownPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownRoutingModule {}
