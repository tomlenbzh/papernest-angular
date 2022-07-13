import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPageComponent } from './pages/reset-page/reset-page.component';

const routes: Routes = [
  { path: '', component: ResetPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetRoutingModule {}
