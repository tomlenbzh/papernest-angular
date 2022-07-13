import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpPageComponent } from './pages/up/up-page.component';

const routes: Routes = [
  { path: '', component: UpPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpRoutingModule {}
