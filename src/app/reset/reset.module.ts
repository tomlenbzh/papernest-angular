import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetRoutingModule } from './reset-routing.module';
import { pages } from './pages';
import { components } from './components';

@NgModule({
  declarations: [...pages, ...components],
  imports: [CommonModule, ResetRoutingModule]
})
export class ResetModule {}
